export type CartItem = string;

export interface CartProps {
    items: CartItem[];
};

export type AddToCartModalProps = {
  productTitle: string;
  onYes: (title: string) => void;
  onNo: () => void;
};
