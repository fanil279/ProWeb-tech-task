import instanceAPI from '../api/axios';
import type { Product, ProductsResponse } from '../types';

class ProductService {
    static async getProducts(signal?: AbortSignal): Promise<Product[]> {
        const response = await instanceAPI.get<ProductsResponse>('/products', {
            signal
        });

        return response.data.products;
    };
}

export default ProductService;
