import type { Banner } from '@/types/banner';
import type { Category } from '@/types/category';
import type { Restaurant } from '@/types/restaurant';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Hambúrguer', emoji: '🍔' },
  { id: '2', name: 'Pizza', emoji: '🍕' },
  { id: '3', name: 'Sushi', emoji: '🍱' },
  { id: '4', name: 'Sobremesas', emoji: '🎂' },
];

export const BANNERS: Banner[] = [
  {
    id: '1',
    badge: 'Promoção especial',
    title: 'Frete grátis',
    description: 'em pedidos acima de\nR$ 30,00',
    ctaText: 'Peça agora',
    backgroundColor: '#2563EB',
    // Substitua pela imagem real: require('@/assets/images/banners/burger-promo.jpg')
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80',
  },
  {
    id: '2',
    badge: 'Novidade',
    title: '10% off',
    description: 'em pizzas selecionadas\nneste fim de semana',
    ctaText: 'Ver ofertas',
    backgroundColor: '#DC2626',
    // Substitua pela imagem real: require('@/assets/images/banners/pizza-deal.jpg')
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80',
  },
  {
    id: '3',
    badge: 'Exclusivo',
    title: 'Combo sushi',
    description: 'pague 1, leve 2\naos sábados',
    ctaText: 'Pedir já',
    backgroundColor: '#059669',
    // Substitua pela imagem real: require('@/assets/images/banners/sushi-promo.jpg')
    image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=300&q=80',
  },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'Burger House',
    // Substitua pela imagem real: require('@/assets/images/restaurants/burger-house.jpg')
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80',
    logoEmoji: '🍔',
    rating: 4.7,
    ratingCount: '1,2 mil',
    deliveryTime: '30–40 min',
    deliveryFee: 'R$ 5,99',
    category: 'Hambúrgueres',
    categoryId: '1',
    categoryBg: '#DBEAFE',
    categoryText: '#1D4ED8',
    isFavorite: false,
    description:
      'Hambúrgueres artesanais com ingredientes selecionados e muito sabor. Qualidade em cada mordida.',
  },
  {
    id: '2',
    name: 'Pizza Napoli',
    // Substitua pela imagem real: require('@/assets/images/restaurants/pizza-napoli.jpg')
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    logoEmoji: '🍕',
    rating: 4.6,
    ratingCount: '890',
    deliveryTime: '35–45 min',
    deliveryFee: 'R$ 6,99',
    category: 'Pizza',
    categoryId: '2',
    categoryBg: '#FEE2E2',
    categoryText: '#DC2626',
    isFavorite: false,
    description:
      'Pizzas artesanais assadas em forno a lenha, com massa fininha e ingredientes fresquinhos.',
  },
  {
    id: '3',
    name: 'Oishii desu!',
    // Substitua pela imagem real: require('@/assets/images/restaurants/sushi-zen.jpg')
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80',
    logoEmoji: '🍣',
    rating: 4.8,
    ratingCount: '2,1 mil',
    deliveryTime: '25–35 min',
    deliveryFee: 'R$ 6,99',
    category: 'Japonesa',
    categoryId: '3',
    categoryBg: '#D1FAE5',
    categoryText: '#059669',
    isFavorite: false,
    description:
      'Culinária japonesa autêntica com peixes frescos selecionados diariamente.',
  },
  {
    id: '4',
    name: 'Doce Mania',
    // Substitua pela imagem real: require('@/assets/images/restaurants/doce-mania.jpg')
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
    logoEmoji: '🧁',
    rating: 4.9,
    ratingCount: '3,4 mil',
    deliveryTime: '20–30 min',
    deliveryFee: 'R$ 4,99',
    category: 'Sobremesas',
    categoryId: '4',
    categoryBg: '#F3E8FF',
    categoryText: '#7C3AED',
    isFavorite: false,
    description: 'Doces artesanais feitos com muito carinho para adoçar o seu dia.',
  },
  {
    id: '5',
    name: 'Taco Fiesta',
    // Substitua pela imagem real: require('@/assets/images/restaurants/taco-fiesta.jpg')
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
    logoEmoji: '🌮',
    rating: 4.5,
    ratingCount: '567',
    deliveryTime: '20–30 min',
    deliveryFee: 'R$ 3,99',
    category: 'Mexicana',
    categoryId: null,
    categoryBg: '#FEF3C7',
    categoryText: '#D97706',
    isFavorite: false,
    description: 'Sabores mexicanos autênticos, com tacos, burritos e muito tempero.',
  },
  {
    id: '6',
    name: 'Pasta & Vino',
    // Substitua pela imagem real: require('@/assets/images/restaurants/pasta-vino.jpg')
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80',
    logoEmoji: '🍝',
    rating: 4.7,
    ratingCount: '1,8 mil',
    deliveryTime: '35–45 min',
    deliveryFee: 'R$ 7,99',
    category: 'Italiana',
    categoryId: null,
    categoryBg: '#FCE7F3',
    categoryText: '#BE185D',
    isFavorite: false,
    description: 'Massas artesanais e receitas tradicionais italianas em cada prato.',
  },
];
