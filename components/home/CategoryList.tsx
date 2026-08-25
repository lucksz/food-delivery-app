import type { Category } from '@/types/category';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

interface Props {
  categories: Category[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function CategoryList({ categories, selectedId, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 20 }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          emoji={category.emoji}
          name={category.name}
          isSelected={selectedId === category.id}
          onPress={() => onSelect(category.id)}
        />
      ))}
      <CategoryCard isMore name="Ver todas" onPress={() => {}} />
    </ScrollView>
  );
}
