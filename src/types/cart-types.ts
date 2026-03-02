import type { Product } from "./index";

export type CartItem = Product['title'];

export interface CartProps {
    items: CartItem[];
};

export type AddToCartModalProps = {
	productTitle: string;
	onYes: (title: string) => void;
	onNo: () => void;
};
