import MenuCategoryTabs from '@/components/restaurant/MenuCategoryTabs';
import MenuSection from '@/components/restaurant/MenuSection';
import RestaurantCoverImage from '@/components/restaurant/RestaurantCoverImage';
import RestaurantInfoCard from '@/components/restaurant/RestaurantInfoCard';
import RestaurantLogoBadge from '@/components/restaurant/RestaurantLogoBadge';
import { MENU_BY_RESTAURANT } from '@/data/menu';
import { RESTAURANTS } from '@/data/mock';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const restaurant = RESTAURANTS.find((r) => r.id === id);
  const menuCategories = MENU_BY_RESTAURANT[id] ?? [];

  const [selectedCategoryId, setSelectedCategoryId] = useState(menuCategories[0]?.id ?? '');
  const selectedCategory = menuCategories.find((c) => c.id === selectedCategoryId);

  if (!restaurant) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-base text-gray-500">Restaurante não encontrado.</Text>
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} bounces>
        <View style={{ position: 'relative' }}>
          <RestaurantCoverImage
            image={restaurant.image}
            isFavorite={isFavorite}
            onBackPress={() => router.back()}
            onToggleFavorite={() => setIsFavorite((prev) => !prev)}
          />

          <RestaurantInfoCard restaurant={restaurant} />

          <RestaurantLogoBadge emoji={restaurant.logoEmoji} backgroundColor={restaurant.categoryBg} />
        </View>

        <MenuCategoryTabs
          categories={menuCategories}
          selectedId={selectedCategoryId}
          onSelect={setSelectedCategoryId}
        />

        {selectedCategory && (
          <MenuSection
            title={selectedCategory.label}
            items={selectedCategory.items}
            onItemPress={(item) =>
              router.push({ pathname: '/product/[id]', params: { id: item.id, restaurantId: restaurant.id } })
            }
          />
        )}

        <View className="h-6" />
      </ScrollView>
    </View>
  );
}
