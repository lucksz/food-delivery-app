import Badge from '@/components/common/Badge';
import type { Restaurant } from '@/types/restaurant';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const CARD_WIDTH = (SCREEN_WIDTH - 44) / 2;

interface Props {
  restaurant: Restaurant;
  onPress?: () => void;
}

export default function RestaurantCard({ restaurant, onPress }: Props) {
  const [isFavorite, setIsFavorite] = useState(restaurant.isFavorite);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      }}
    >
      <View style={{ height: 120, position: 'relative' }}>
        <Image
          source={{ uri: restaurant.image }}
          style={{ width: '100%', height: '100%' }}
          contentFit="cover"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsFavorite((prev) => !prev)}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 20,
            width: 32,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={16}
            color={isFavorite ? '#EF4444' : '#374151'}
          />
        </TouchableOpacity>
      </View>

      <View className="p-3">
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-sm font-bold text-gray-900 flex-1" numberOfLines={1}>
            {restaurant.name}
          </Text>
          <View className="flex-row items-center ml-2">
            <Ionicons name="star" size={12} color="#F59E0B" />
            <Text className="text-xs font-semibold text-gray-700 ml-0.5">
              {restaurant.rating.toFixed(1)}
            </Text>
          </View>
        </View>

        <Text className="text-xs text-gray-500 mb-2">
          {restaurant.deliveryTime} · {restaurant.deliveryFee}
        </Text>

        <Badge
          label={restaurant.category}
          backgroundColor={restaurant.categoryBg}
          textColor={restaurant.categoryText}
        />
      </View>
    </TouchableOpacity>
  );
}
