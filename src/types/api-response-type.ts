import type { Product } from './index';
    
export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};
