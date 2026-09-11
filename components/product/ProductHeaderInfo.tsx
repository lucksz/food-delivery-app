import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface Props {
  name: string;
  description: string;
  price: string;
  rating: number;
  ratingCount: string;
  deliveryTime: string;
  deliveryFee: string;
  tag: string;
}

export default function ProductHeaderInfo({
  name,
  description,
  price,
  rating,
  ratingCount,
  deliveryTime,
  deliveryFee,
  tag,
}: Props) {
  return (
    <View className="bg-white px-4 pt-5 pb-4">
      <Text className="text-2xl font-bold text-gray-900">{name}</Text>
      <Text className="text-sm text-gray-500 mt-1">{description}</Text>

      <View className="flex-row items-center justify-between mt-3">
        <Text className="text-2xl font-bold text-blue-600">{price}</Text>
        <View className="flex-row items-center">
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text className="text-sm font-semibold text-gray-800 ml-1">{rating.toFixed(1)}</Text>
          <Text className="text-sm text-gray-500 ml-1">({ratingCount})</Text>
        </View>
      </View>

      <View className="flex-row items-center flex-wrap mt-3 pt-3 border-t border-gray-100">
        <View className="flex-row items-center">
          <Ionicons name="time-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 ml-1">{deliveryTime}</Text>
        </View>

        <View className="flex-row items-center ml-4">
          <Ionicons name="bicycle-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 ml-1">{deliveryFee}</Text>
        </View>

        <View className="flex-row items-center ml-4">
          <Ionicons name="pricetag-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 ml-1">{tag}</Text>
        </View>
      </View>
    </View>
  );
}
