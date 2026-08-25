import BannerCarousel from '@/components/home/BannerCarousel';
import CategoryList from '@/components/home/CategoryList';
import HomeHeader from '@/components/home/HomeHeader';
import RestaurantList from '@/components/home/RestaurantList';
import SearchBar from '@/components/home/SearchBar';
import { BANNERS, CATEGORIES, RESTAURANTS } from '@/data/mock';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const filteredRestaurants = RESTAURANTS.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategoryId
      ? r.categoryId === selectedCategoryId
      : true;
    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (id: string) => {
    setSelectedCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false} bounces>
        <SearchBar value={search} onChangeText={setSearch} />
        <CategoryList
          categories={CATEGORIES}
          selectedId={selectedCategoryId}
          onSelect={handleCategorySelect}
        />
        <BannerCarousel banners={BANNERS} />
        <RestaurantList restaurants={filteredRestaurants} />
      </ScrollView>
    </SafeAreaView>
  );
}
