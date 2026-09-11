import type { MenuCategory } from '@/types/menu';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

interface Props {
  categories: MenuCategory[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function MenuCategoryTabs({ categories, selectedId, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="bg-white"
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12, gap: 8 }}
    >
      {categories.map((category) => {
        const isSelected = category.id === selectedId;
        return (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.8}
            onPress={() => onSelect(category.id)}
            className={`px-4 py-2 rounded-full ${isSelected ? 'bg-blue-600' : 'bg-gray-100'}`}
          >
            <Text className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-700'}`}>
              {category.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
