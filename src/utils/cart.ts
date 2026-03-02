import type { Product } from '../types';

export function addUniqueToCart(cart: Product[], product: Product): Product[] {
  return cart.some((p) => p.id === product.id)
    ? cart
    : [...cart, product];
};
