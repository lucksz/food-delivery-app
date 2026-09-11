import type { MenuItem } from '@/types/menu';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  item: MenuItem;
  onAddPress?: () => void;
}

export default function MenuItemCard({ item, onAddPress }: Props) {
  return (
    <View className="flex-row items-start bg-white rounded-2xl p-3 mb-3 border border-gray-100">
      <View className="flex-1 pr-3">
        <Text className="text-base font-bold text-gray-900" numberOfLines={1}>
          {item.name}
        </Text>
        <Text className="text-xs text-gray-500 mt-1" numberOfLines={3}>
          {item.description}
        </Text>
        <Text className="text-sm font-bold text-gray-900 mt-2">{item.price}</Text>
      </View>

      <View style={{ width: 88, height: 88 }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: '100%', borderRadius: 12 }}
          contentFit="cover"
        />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onAddPress}
          style={{
            position: 'absolute',
            bottom: -6,
            right: -6,
            width: 28,
            height: 28,
            borderRadius: 14,
            backgroundColor: '#2563EB',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#fff',
          }}
        >
          <Ionicons name="add" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
