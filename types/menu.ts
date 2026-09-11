export interface MenuItemSizeOption {
  id: string;
  label: string;
  description?: string;
  price: string;
}

export interface MenuItemExtra {
  id: string;
  label: string;
  price: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  // Opcional: nem todo produto tem tamanhos (ex.: bebidas, sobremesas em porção única).
  sizes?: MenuItemSizeOption[];
  // Opcional: nem todo produto tem adicionais (ex.: um combinado de sushi fechado).
  extras?: MenuItemExtra[];
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}
