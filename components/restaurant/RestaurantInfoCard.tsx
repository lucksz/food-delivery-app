import type { Restaurant } from '@/types/restaurant';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantInfoCard({ restaurant }: Props) {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  return (
    <View className="bg-white px-4 pt-10 pb-4">
      <Text className="text-2xl font-bold text-gray-900">{restaurant.name}</Text>

      <View className="flex-row items-center mt-2">
        <View className="flex-row items-center">
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text className="text-sm font-semibold text-gray-800 ml-1">
            {restaurant.rating.toFixed(1)}
          </Text>
          <Text className="text-sm text-gray-500 ml-1">({restaurant.ratingCount})</Text>
        </View>

        <View className="flex-row items-center ml-4">
          <Ionicons name="time-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 ml-1">{restaurant.deliveryTime}</Text>
        </View>

        <View className="flex-row items-center ml-4">
          <Ionicons name="bicycle-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 ml-1">{restaurant.deliveryFee}</Text>
        </View>
      </View>

      <Text className="text-sm text-gray-500 mt-2">{restaurant.category}</Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setDescriptionExpanded((prev) => !prev)}
        className="flex-row items-center justify-between mt-2"
      >
        <Text
          className="text-sm text-gray-500 flex-1 pr-2"
          numberOfLines={descriptionExpanded ? undefined : 2}
        >
          {restaurant.description}
        </Text>
        <Ionicons
          name={descriptionExpanded ? 'chevron-down' : 'chevron-forward'}
          size={18}
          color="#9CA3AF"
        />
      </TouchableOpacity>
    </View>
  );
}
