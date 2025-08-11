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
  }[];
  images: string[];
  thumbnail: string;
}
