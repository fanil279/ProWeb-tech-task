import type { CartItem } from '../types';

export function addUniqueToCart(cart: CartItem[], item: CartItem): CartItem[] {
  return cart.some((p) => p.trim() === item.trim())
    ? cart
    : [...cart, item];
};
