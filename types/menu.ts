export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}
