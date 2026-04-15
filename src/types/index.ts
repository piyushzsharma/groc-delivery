export enum ProductCategory {
  PRODUCE = 'produce',
  BAKERY = 'bakery',
  MEAT = 'meat',
  DAIRY = 'dairy',
  BEVERAGES = 'beverages',
  SNACKS = 'snacks',
  PANTRY = 'pantry'
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PREPARING = 'preparing',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}

export interface Location {
  id: string;
  label: string;
  addressLine1: string;
  addressLine2?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  phoneNumber: string;
  name?: string;
  email?: string;
  savedLocations: Location[];
  activeLocation?: Location;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  imageUrl: string;
  isAvailable: boolean;
  stockCount: number;
  unit: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
