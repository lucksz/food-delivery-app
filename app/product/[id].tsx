import ExtrasList from '@/components/product/ExtrasList';
import ObservationsInput from '@/components/product/ObservationsInput';
import ProductCoverImage from '@/components/product/ProductCoverImage';
import ProductFooterBar from '@/components/product/ProductFooterBar';
import ProductHeaderInfo from '@/components/product/ProductHeaderInfo';
import SizeOptionList from '@/components/product/SizeOptionList';
import { MENU_BY_RESTAURANT } from '@/data/menu';
import { RESTAURANTS } from '@/data/mock';
import { formatPrice, parsePrice } from '@/utils/price';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductScreen() {
  const { id, restaurantId } = useLocalSearchParams<{ id: string; restaurantId: string }>();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedExtraIds, setSelectedExtraIds] = useState<string[]>([]);
  const [observation, setObservation] = useState('');

  const restaurant = RESTAURANTS.find((r) => r.id === restaurantId);
  const item = useMemo(() => {
    const categories = MENU_BY_RESTAURANT[restaurantId] ?? [];
    for (const category of categories) {
      const found = category.items.find((menuItem) => menuItem.id === id);
      if (found) return found;
    }
    return undefined;
  }, [id, restaurantId]);

  const [selectedSizeId, setSelectedSizeId] = useState(item?.sizes?.[0]?.id ?? '');

  if (!restaurant || !item) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-base text-gray-500">Produto não encontrado.</Text>
      </SafeAreaView>
    );
  }

  const selectedSize = item.sizes?.find((size) => size.id === selectedSizeId);
  const basePrice = selectedSize ? parsePrice(selectedSize.price) : parsePrice(item.price);
  const extrasTotal = (item.extras ?? [])
    .filter((extra) => selectedExtraIds.includes(extra.id))
    .reduce((sum, extra) => sum + parsePrice(extra.price), 0);
  const unitPrice = basePrice + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const toggleExtra = (extraId: string) => {
    setSelectedExtraIds((prev) =>
      prev.includes(extraId) ? prev.filter((id) => id !== extraId) : [...prev, extraId]
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} bounces>
        <ProductCoverImage
          image={item.image}
          isFavorite={isFavorite}
          onBackPress={() => router.back()}
          onToggleFavorite={() => setIsFavorite((prev) => !prev)}
        />

        <ProductHeaderInfo
          name={item.name}
          description={item.description}
          price={selectedSize ? selectedSize.price : item.price}
          rating={restaurant.rating}
          ratingCount={restaurant.ratingCount}
          deliveryTime={restaurant.deliveryTime}
          deliveryFee={restaurant.deliveryFee}
          tag={restaurant.category}
        />

        <View className="h-2" />

        {item.sizes && item.sizes.length > 0 && (
          <>
            <SizeOptionList
              sizes={item.sizes}
              selectedId={selectedSizeId}
              onSelect={setSelectedSizeId}
            />
            <View className="h-2" />
          </>
        )}

        {item.extras && item.extras.length > 0 && (
          <>
            <ExtrasList
              extras={item.extras}
              selectedIds={selectedExtraIds}
              onToggle={toggleExtra}
            />
            <View className="h-2" />
          </>
        )}

        <ObservationsInput value={observation} onChangeText={setObservation} />

        <View className="h-6" />
      </ScrollView>

      <ProductFooterBar
        quantity={quantity}
        totalPrice={formatPrice(totalPrice)}
        onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
        onIncrease={() => setQuantity((prev) => prev + 1)}
        onAddToCart={() => router.back()}
      />
    </View>
  );
}
