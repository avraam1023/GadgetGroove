export interface Product {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: ProductPrice;
  category: productCategory;
  issueDate: string;
  stock: number;
  rating: number;
  brand: string;
  warranty: number;
  images: string[];
}

export interface ProductPrice {
  current: number;
  currency: string;
  beforeDiscount: number;
  discountPercentage: number;
}

export interface productCategory {
  id: string;
  mame: string;
  image: string;
}

export interface ProductDetails extends Product {
  ratings: rating[];
}

export interface rating {
  userId: string;
  value: number;
  createAt: string;
}
