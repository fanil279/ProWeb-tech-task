import type { Product } from './index';

export interface CartProps {
    products: Product[];
};


export type AddToCartModalProps = {
  product: Product;
  onYes: (product: Product) => void;
  onNo: () => void;
};
