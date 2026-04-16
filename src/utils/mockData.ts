import { ProductCategory } from '../types';
import type { Product } from '../types';

export const mockCategories = [
  { id: 'c1', name: 'Fresh Fruits & Vegetable', color: 'bg-green-100', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&q=80' },
  { id: 'c2', name: 'Cooking Oil & Ghee', color: 'bg-orange-100', image: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=400&q=80' },
  { id: 'c3', name: 'Meat & Fish', color: 'bg-red-100', image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&q=80' },
  { id: 'c4', name: 'Bakery & Snacks', color: 'bg-purple-100', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
  { id: 'c5', name: 'Dairy & Eggs', color: 'bg-yellow-100', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80' },
  { id: 'c6', name: 'Beverages', color: 'bg-blue-100', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Bananas Are Nutritious. Bananas May Be Good For Weight Loss. As Part Of A Healthful And Varied Diet.',
    price: 4.99,
    category: ProductCategory.PRODUCE,
    imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&q=80',
    isAvailable: true,
    stockCount: 100,
    unit: '7pcs, Price'
  },
  {
    id: '2',
    name: 'Red Apple',
    description: 'Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.',
    price: 4.99,
    category: ProductCategory.PRODUCE,
    imageUrl: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400&q=80',
    isAvailable: true,
    stockCount: 50,
    unit: '1kg, Price'
  },
  {
    id: '3',
    name: 'Bell Pepper Red',
    description: 'Fresh red bell pepper',
    price: 4.99,
    category: ProductCategory.PRODUCE,
    imageUrl: 'https://pushtiorganics.com/cdn/shop/files/RedBellpeppers.webp?v=1709276547',
    isAvailable: true,
    stockCount: 50,
    unit: '1kg, Price'
  },
  {
    id: '4',
    name: 'Ginger',
    description: 'Fresh organic ginger',
    price: 4.99,
    category: ProductCategory.PRODUCE,
    imageUrl: 'https://organicmandya.com/cdn/shop/files/Ginger.jpg?v=1757079802&width=1000',
    isAvailable: true,
    stockCount: 50,
    unit: '250gm, Price'
  },
  {
    id: '5',
    name: 'Beef Bone',
    description: 'Fresh beef bone for soup',
    price: 4.99,
    category: ProductCategory.MEAT,
    imageUrl: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=400&auto=format&fit=crop',
    isAvailable: true,
    stockCount: 50,
    unit: '1kg, Price'
  },
  {
    id: '6',
    name: 'Broiler Chicken',
    description: 'Fresh whole chicken',
    price: 4.99,
    category: ProductCategory.MEAT,
    imageUrl: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=400&auto=format&fit=crop',
    isAvailable: true,
    stockCount: 50,
    unit: '1kg, Price'
  },
  {
    id: '7',
    name: 'Egg Chicken Red',
    description: 'Fresh farm eggs',
    price: 1.99,
    category: ProductCategory.DAIRY,
    imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=400&auto=format&fit=crop',
    isAvailable: true,
    stockCount: 50,
    unit: '4pcs, Price'
  },
  {
    id: '8',
    name: 'Egg Chicken White',
    description: 'Fresh farm eggs',
    price: 1.50,
    category: ProductCategory.DAIRY,
    imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=400&auto=format&fit=crop',
    isAvailable: true,
    stockCount: 50,
    unit: '180g, Price'
  }
];

export const simulateNetworkDelay = <T>(data: T, delayMs: number = 1000): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
};
