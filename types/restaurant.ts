export interface Restaurant {
  id: string;
  name: string;
  image: string;
  logoEmoji: string;
  rating: number;
  ratingCount: string;
  deliveryTime: string;
  deliveryFee: string;
  category: string;
  categoryId: string | null;
  categoryBg: string;
  categoryText: string;
  isFavorite: boolean;
  description: string;
}
