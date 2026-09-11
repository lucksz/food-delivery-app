import type { MenuCategory } from '@/types/menu';

// Imagens ilustrativas (Unsplash) — substitua pelas fotos reais dos produtos quando disponíveis.
const IMG = {
  burgerCheddarBacon: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
  burgerSmash: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
  burgerDouble: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80',
  burgerVeggie: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80',
  onionRings: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80',
  fries: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80',
  friesRustic: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
  soda: 'https://images.pexels.com/photos/4113625/pexels-photo-4113625.jpeg?w=400&q=80',
  juice: 'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?w=400&q=80',
  milkshake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
  pizzaMargherita: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
  pizzaPepperoni: 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&q=80',
  pizzaCalabresa: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  cheesecake: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
  chocolateCake: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
  sweet: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
  sushiCombo: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80',
  hotRoll: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
  temaki: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80',
  icedTea: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  taco: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
  burrito: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400&q=80',
  nachos: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?w=400&q=80',
  guacamole: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
  carbonara: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80',
  lasagna: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80',
  bruschetta: 'https://images.pexels.com/photos/7432994/pexels-photo-7432994.jpeg?w=400&q=80',
  caprese: 'https://images.pexels.com/photos/144239/tomatoes-tomato-mozzarella-basil-mozzarella-144239.jpeg?w=400&q=80',
};

export const MENU_BY_RESTAURANT: Record<string, MenuCategory[]> = {
  '1': [
    {
      id: 'destaques',
      label: 'Destaques',
      items: [
        {
          id: '1-1',
          name: 'Cheddar Bacon',
          description:
            'Pão brioche, 180g de carne, cheddar, bacon, alface, tomate e molho especial da casa.',
          price: 'R$ 32,90',
          image: IMG.burgerCheddarBacon,
        },
        {
          id: '1-2',
          name: 'Smash Classic',
          description: 'Pão brioche, 2 carnes smash, queijo, picles, cebola e molho especial.',
          price: 'R$ 28,90',
          image: IMG.burgerSmash,
        },
        {
          id: '1-3',
          name: 'Onion Rings',
          description: 'Anéis de cebola empanados e crocantes, servidos com molho da casa.',
          price: 'R$ 16,90',
          image: IMG.onionRings,
        },
        {
          id: '1-4',
          name: 'Batata Frita',
          description: 'Batata frita crocante, no ponto certo, com tempero especial.',
          price: 'R$ 12,90',
          image: IMG.fries,
        },
      ],
    },
    {
      id: 'hamburgueres',
      label: 'Hambúrgueres',
      items: [
        {
          id: '1-1',
          name: 'Cheddar Bacon',
          description:
            'Pão brioche, 180g de carne, cheddar, bacon, alface, tomate e molho especial da casa.',
          price: 'R$ 32,90',
          image: IMG.burgerCheddarBacon,
        },
        {
          id: '1-2',
          name: 'Smash Classic',
          description: 'Pão brioche, 2 carnes smash, queijo, picles, cebola e molho especial.',
          price: 'R$ 28,90',
          image: IMG.burgerSmash,
        },
        {
          id: '1-5',
          name: 'Duplo Bacon',
          description: 'Dois hambúrgueres, queijo prato, muito bacon e molho barbecue.',
          price: 'R$ 34,90',
          image: IMG.burgerDouble,
        },
        {
          id: '1-6',
          name: 'Veggie Burger',
          description: 'Hambúrguer de grão-de-bico, queijo, rúcula e maionese vegana.',
          price: 'R$ 27,90',
          image: IMG.burgerVeggie,
        },
      ],
    },
    {
      id: 'acompanhamentos',
      label: 'Acompanhamentos',
      items: [
        {
          id: '1-3',
          name: 'Onion Rings',
          description: 'Anéis de cebola empanados e crocantes, servidos com molho da casa.',
          price: 'R$ 16,90',
          image: IMG.onionRings,
        },
        {
          id: '1-4',
          name: 'Batata Frita',
          description: 'Batata frita crocante, no ponto certo, com tempero especial.',
          price: 'R$ 12,90',
          image: IMG.fries,
        },
        {
          id: '1-7',
          name: 'Batata Rústica',
          description: 'Batatas rústicas assadas com alecrim e páprica defumada.',
          price: 'R$ 14,90',
          image: IMG.friesRustic,
        },
      ],
    },
    {
      id: 'bebidas',
      label: 'Bebidas',
      items: [
        {
          id: '1-8',
          name: 'Refrigerante Lata',
          description: 'Lata 350ml, gelada, diversos sabores.',
          price: 'R$ 6,90',
          image: IMG.soda,
        },
        {
          id: '1-9',
          name: 'Suco Natural',
          description: 'Suco natural da fruta, feito na hora, sem adição de açúcar.',
          price: 'R$ 8,90',
          image: IMG.juice,
        },
        {
          id: '1-10',
          name: 'Milkshake',
          description: 'Milkshake cremoso de baunilha, chocolate ou morango.',
          price: 'R$ 12,90',
          image: IMG.milkshake,
        },
      ],
    },
  ],
  '2': [
    {
      id: 'destaques',
      label: 'Destaques',
      items: [
        {
          id: '2-1',
          name: 'Margherita',
          description: 'Molho de tomate, mussarela de búfala, manjericão fresco e azeite.',
          price: 'R$ 39,90',
          image: IMG.pizzaMargherita,
        },
        {
          id: '2-2',
          name: 'Pepperoni',
          description: 'Molho de tomate, mussarela e fatias generosas de pepperoni.',
          price: 'R$ 44,90',
          image: IMG.pizzaPepperoni,
        },
        {
          id: '2-3',
          name: 'Calabresa',
          description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
          price: 'R$ 41,90',
          image: IMG.pizzaCalabresa,
        },
      ],
    },
    {
      id: 'pizzas',
      label: 'Pizzas',
      items: [
        {
          id: '2-1',
          name: 'Margherita',
          description: 'Molho de tomate, mussarela de búfala, manjericão fresco e azeite.',
          price: 'R$ 39,90',
          image: IMG.pizzaMargherita,
        },
        {
          id: '2-2',
          name: 'Pepperoni',
          description: 'Molho de tomate, mussarela e fatias generosas de pepperoni.',
          price: 'R$ 44,90',
          image: IMG.pizzaPepperoni,
        },
        {
          id: '2-3',
          name: 'Calabresa',
          description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
          price: 'R$ 41,90',
          image: IMG.pizzaCalabresa,
        },
        {
          id: '2-4',
          name: 'Quatro Queijos',
          description: 'Mussarela, provolone, gorgonzola e parmesão.',
          price: 'R$ 46,90',
          image: IMG.pizzaMargherita,
        },
      ],
    },
    {
      id: 'bebidas',
      label: 'Bebidas',
      items: [
        {
          id: '2-5',
          name: 'Refrigerante Lata',
          description: 'Lata 350ml, gelada, diversos sabores.',
          price: 'R$ 6,90',
          image: IMG.soda,
        },
        {
          id: '2-6',
          name: 'Suco Natural',
          description: 'Suco natural da fruta, feito na hora, sem adição de açúcar.',
          price: 'R$ 8,90',
          image: IMG.juice,
        },
      ],
    },
    {
      id: 'sobremesas',
      label: 'Sobremesas',
      items: [
        {
          id: '2-7',
          name: 'Cheesecake',
          description: 'Cheesecake cremoso com calda de frutas vermelhas.',
          price: 'R$ 14,90',
          image: IMG.cheesecake,
        },
        {
          id: '2-8',
          name: 'Bolo de Chocolate',
          description: 'Bolo de chocolate com cobertura de brigadeiro.',
          price: 'R$ 13,90',
          image: IMG.chocolateCake,
        },
      ],
    },
  ],
  '3': [
    {
      id: 'destaques',
      label: 'Destaques',
      items: [
        {
          id: '3-1',
          name: 'Combinado 20 peças',
          description: 'Seleção especial de sushis e sashimis do dia, para compartilhar.',
          price: 'R$ 54,90',
          image: IMG.sushiCombo,
        },
        {
          id: '3-2',
          name: 'Hot Roll',
          description: 'Enrolado empanado e frito, recheado com salmão e cream cheese.',
          price: 'R$ 32,90',
          image: IMG.hotRoll,
        },
        {
          id: '3-3',
          name: 'Temaki Salmão',
          description: 'Cone de alga nori com arroz, salmão fresco e cream cheese.',
          price: 'R$ 28,90',
          image: IMG.temaki,
        },
      ],
    },
    {
      id: 'sushis',
      label: 'Sushis',
      items: [
        {
          id: '3-1',
          name: 'Combinado 20 peças',
          description: 'Seleção especial de sushis e sashimis do dia, para compartilhar.',
          price: 'R$ 54,90',
          image: IMG.sushiCombo,
        },
        {
          id: '3-2',
          name: 'Hot Roll',
          description: 'Enrolado empanado e frito, recheado com salmão e cream cheese.',
          price: 'R$ 32,90',
          image: IMG.hotRoll,
        },
        {
          id: '3-4',
          name: 'Uramaki Skin',
          description: 'Arroz, pele de salmão crocante, cebolinha e molho tarê.',
          price: 'R$ 30,90',
          image: IMG.sushiCombo,
        },
      ],
    },
    {
      id: 'temakis',
      label: 'Temakis',
      items: [
        {
          id: '3-3',
          name: 'Temaki Salmão',
          description: 'Cone de alga nori com arroz, salmão fresco e cream cheese.',
          price: 'R$ 28,90',
          image: IMG.temaki,
        },
        {
          id: '3-5',
          name: 'Temaki Atum',
          description: 'Cone de alga nori com arroz, atum fresco e cebolinha.',
          price: 'R$ 26,90',
          image: IMG.temaki,
        },
      ],
    },
    {
      id: 'bebidas',
      label: 'Bebidas',
      items: [
        {
          id: '3-6',
          name: 'Chá Gelado',
          description: 'Chá verde gelado, leve e refrescante.',
          price: 'R$ 7,90',
          image: IMG.icedTea,
        },
        {
          id: '3-7',
          name: 'Refrigerante Lata',
          description: 'Lata 350ml, gelada, diversos sabores.',
          price: 'R$ 6,90',
          image: IMG.soda,
        },
      ],
    },
  ],
  '4': [
    {
      id: 'destaques',
      label: 'Destaques',
      items: [
        {
          id: '4-1',
          name: 'Bolo de Chocolate',
          description: 'Bolo de chocolate com cobertura de brigadeiro.',
          price: 'R$ 13,90',
          image: IMG.chocolateCake,
        },
        {
          id: '4-2',
          name: 'Cheesecake',
          description: 'Cheesecake cremoso com calda de frutas vermelhas.',
          price: 'R$ 14,90',
          image: IMG.cheesecake,
        },
        {
          id: '4-3',
          name: 'Milkshake',
          description: 'Milkshake cremoso de baunilha, chocolate ou morango.',
          price: 'R$ 12,90',
          image: IMG.milkshake,
        },
      ],
    },
    {
      id: 'bolos',
      label: 'Bolos',
      items: [
        {
          id: '4-1',
          name: 'Bolo de Chocolate',
          description: 'Bolo de chocolate com cobertura de brigadeiro.',
          price: 'R$ 13,90',
          image: IMG.chocolateCake,
        },
        {
          id: '4-4',
          name: 'Torta de Limão',
          description: 'Torta gelada de limão com merengue maçaricado.',
          price: 'R$ 12,90',
          image: IMG.cheesecake,
        },
      ],
    },
    {
      id: 'doces',
      label: 'Doces',
      items: [
        {
          id: '4-5',
          name: 'Brigadeiro',
          description: 'Brigadeiro artesanal com granulado belga (unidade).',
          price: 'R$ 4,90',
          image: IMG.sweet,
        },
        {
          id: '4-6',
          name: 'Beijinho',
          description: 'Beijinho artesanal com coco fresco (unidade).',
          price: 'R$ 4,90',
          image: IMG.sweet,
        },
      ],
    },
    {
      id: 'bebidas',
      label: 'Bebidas',
      items: [
        {
          id: '4-3',
          name: 'Milkshake',
          description: 'Milkshake cremoso de baunilha, chocolate ou morango.',
          price: 'R$ 12,90',
          image: IMG.milkshake,
        },
        {
          id: '4-7',
          name: 'Suco Natural',
          description: 'Suco natural da fruta, feito na hora, sem adição de açúcar.',
          price: 'R$ 8,90',
          image: IMG.juice,
        },
      ],
    },
  ],
  '5': [
    {
      id: 'destaques',
      label: 'Destaques',
      items: [
        {
          id: '5-1',
          name: 'Taco de Carne',
          description: 'Tortilha crocante, carne temperada, alface, queijo e pico de gallo.',
          price: 'R$ 14,90',
          image: IMG.taco,
        },
        {
          id: '5-2',
          name: 'Burrito',
          description: 'Tortilha recheada com carne, arroz, feijão, queijo e molho especial.',
          price: 'R$ 22,90',
          image: IMG.burrito,
        },
        {
          id: '5-3',
          name: 'Nachos',
          description: 'Nachos crocantes com queijo derretido, jalapeño e guacamole.',
          price: 'R$ 18,90',
          image: IMG.nachos,
        },
      ],
    },
    {
      id: 'tacos',
      label: 'Tacos',
      items: [
        {
          id: '5-1',
          name: 'Taco de Carne',
          description: 'Tortilha crocante, carne temperada, alface, queijo e pico de gallo.',
          price: 'R$ 14,90',
          image: IMG.taco,
        },
        {
          id: '5-4',
          name: 'Taco de Frango',
          description: 'Tortilha crocante, frango grelhado, alface e molho de iogurte.',
          price: 'R$ 13,90',
          image: IMG.taco,
        },
      ],
    },
    {
      id: 'acompanhamentos',
      label: 'Acompanhamentos',
      items: [
        {
          id: '5-3',
          name: 'Nachos',
          description: 'Nachos crocantes com queijo derretido, jalapeño e guacamole.',
          price: 'R$ 18,90',
          image: IMG.nachos,
        },
        {
          id: '5-5',
          name: 'Guacamole',
          description: 'Guacamole fresco com abacate, limão e coentro, acompanha tortillas.',
          price: 'R$ 9,90',
          image: IMG.guacamole,
        },
      ],
    },
    {
      id: 'bebidas',
      label: 'Bebidas',
      items: [
        {
          id: '5-6',
          name: 'Refrigerante Lata',
          description: 'Lata 350ml, gelada, diversos sabores.',
          price: 'R$ 6,90',
          image: IMG.soda,
        },
      ],
    },
  ],
  '6': [
    {
      id: 'destaques',
      label: 'Destaques',
      items: [
        {
          id: '6-1',
          name: 'Spaghetti Carbonara',
          description: 'Massa artesanal, ovos, queijo pecorino, guanciale e pimenta-do-reino.',
          price: 'R$ 36,90',
          image: IMG.carbonara,
        },
        {
          id: '6-2',
          name: 'Lasanha à Bolonhesa',
          description: 'Camadas de massa fresca, molho bolonhesa e queijos gratinados.',
          price: 'R$ 38,90',
          image: IMG.lasagna,
        },
        {
          id: '6-3',
          name: 'Bruschetta',
          description: 'Pão italiano tostado, tomate fresco, manjericão e azeite extravirgem.',
          price: 'R$ 18,90',
          image: IMG.bruschetta,
        },
      ],
    },
    {
      id: 'massas',
      label: 'Massas',
      items: [
        {
          id: '6-1',
          name: 'Spaghetti Carbonara',
          description: 'Massa artesanal, ovos, queijo pecorino, guanciale e pimenta-do-reino.',
          price: 'R$ 36,90',
          image: IMG.carbonara,
        },
        {
          id: '6-2',
          name: 'Lasanha à Bolonhesa',
          description: 'Camadas de massa fresca, molho bolonhesa e queijos gratinados.',
          price: 'R$ 38,90',
          image: IMG.lasagna,
        },
        {
          id: '6-4',
          name: 'Penne ao Molho Branco',
          description: 'Penne artesanal ao molho branco cremoso com toque de noz-moscada.',
          price: 'R$ 34,90',
          image: IMG.carbonara,
        },
      ],
    },
    {
      id: 'entradas',
      label: 'Entradas',
      items: [
        {
          id: '6-3',
          name: 'Bruschetta',
          description: 'Pão italiano tostado, tomate fresco, manjericão e azeite extravirgem.',
          price: 'R$ 18,90',
          image: IMG.bruschetta,
        },
        {
          id: '6-5',
          name: 'Salada Caprese',
          description: 'Tomate, mussarela de búfala, manjericão fresco e azeite.',
          price: 'R$ 16,90',
          image: IMG.caprese,
        },
      ],
    },
    {
      id: 'bebidas',
      label: 'Bebidas',
      items: [
        {
          id: '6-6',
          name: 'Suco Natural',
          description: 'Suco natural da fruta, feito na hora, sem adição de açúcar.',
          price: 'R$ 8,90',
          image: IMG.juice,
        },
        {
          id: '6-7',
          name: 'Refrigerante Lata',
          description: 'Lata 350ml, gelada, diversos sabores.',
          price: 'R$ 6,90',
          image: IMG.soda,
        },
      ],
    },
  ],
};
