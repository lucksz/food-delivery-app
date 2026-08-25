import type { Restaurant } from '@/types/restaurant';
import { Text, TouchableOpacity, View } from 'react-native';
import RestaurantCard from './RestaurantCard';

interface Props {
  restaurants: Restaurant[];
  onRestaurantPress?: (restaurant: Restaurant) => void;
  onSeeMorePress?: () => void;
}

export default function RestaurantList({
  restaurants,
  onRestaurantPress,
  onSeeMorePress,
}: Props) {
  return (
    <View className="px-4 pb-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg font-bold text-gray-900">
          Restaurantes em destaque
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onSeeMorePress}>
          <Text className="text-sm font-semibold text-blue-600">Ver mais</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onPress={() => onRestaurantPress?.(restaurant)}
          />
        ))}
      </View>
    </View>
  );
}
