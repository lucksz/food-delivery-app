import type { MenuItem } from '@/types/menu';
import { Text, TouchableOpacity, View } from 'react-native';
import MenuItemCard from './MenuItemCard';

interface Props {
  title: string;
  items: MenuItem[];
  onSeeAllPress?: () => void;
  onAddItem?: (item: MenuItem) => void;
}

export default function MenuSection({ title, items, onSeeAllPress, onAddItem }: Props) {
  return (
    <View className="px-4 pt-5 pb-2">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-lg font-bold text-gray-900">{title}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onSeeAllPress}>
          <Text className="text-sm font-semibold text-blue-600">Ver todos</Text>
        </TouchableOpacity>
      </View>

      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAddPress={() => onAddItem?.(item)} />
      ))}
    </View>
  );
}
