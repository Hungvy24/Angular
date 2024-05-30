export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type CreateProduct = {
    title: string | number,
    image: string,
    description: string,
    price: number,
    category: [
      id: number,
      name: string
    ]
}
