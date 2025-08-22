export interface Clothes {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  rating: string;
  brand: string;
  dimensions: { width: number; height: number; depth: number };
  reviews: {
    rating: number;
    comment: string;
    reviewerName: string;
    reviewerEmail: string;
    date: string;
  }[];
  images: string[];
  thumbnail: string;
  amount?: number;
}

export type User = {
  id: number;
  email: string;
  password: string;
  cart: Clothes[];
};

// interface CartItem extends Clothes {
//   amount: number;
// }
