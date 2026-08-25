export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  category: string;
  categoryId: string | null;
  categoryBg: string;
  categoryText: string;
  isFavorite: boolean;
}
