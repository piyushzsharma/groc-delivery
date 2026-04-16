import { Product, ProductCategory } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healtful and varied diet.',
    price: 4.99,
    category: ProductCategory.PRODUCE,
    imageUrl: 'https://images.unsplash.com/photo-1571501443893-01ab1a129ef9?q=80&w=400&auto=format&fit=crop',
    isAvailable: true,
    stockCount: 100,
    unit: '1kg, Price'
  },
  {
    id: '2',
    name: 'Red Apple',
    description: 'Fresh red apples',
    price: 4.99,
    category: ProductCategory.PRODUCE,
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fd6c?q=80&w=400&auto=format&fit=crop',
    isAvailable: true,
    stockCount: 50,
    unit: '1kg, Price'
  }
];

export const simulateNetworkDelay = <T>(data: T, delayMs: number = 1000): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
};
