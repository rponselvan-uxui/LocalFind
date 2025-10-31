
export enum UserRole {
  Guest,
  Customer,
  ShopOwner,
  Admin,
}

export interface Product {
  id: number;
  name: string;
  shopName: string;
  price: string;
  rating: number;
  distance: string;
  imageUrl: string;
  isFavorite: boolean;
}

export interface Activity {
  event: string;
  user: string;
  date: string;
  status: 'Processing' | 'Completed' | 'Warning' | 'Action Required';
}
