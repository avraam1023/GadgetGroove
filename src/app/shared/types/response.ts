import { Product } from './product-type';

export interface getProdutsResopnce {
  total: number;
  limit: number;
  page: number;
  skip: number;
  products: Product[];
}
