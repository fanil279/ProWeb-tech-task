import { type FC, useState, useEffect } from 'react';
import Preloader from '../../components/Preloader';
import ProductService from '../../services/productService';
import type { Product } from '../../types';

const ProductsPage: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Демо задержка для отображения прелоадера.
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    useEffect(() => {
       const controller = new AbortController();

        const fetchProducts = async () => {
            try {
                await sleep(1000);

                const data = await ProductService.getProducts(controller.signal);
                setProducts(data);
            } catch (err) {
                if (
                    err instanceof Error &&
                    err.name === 'CanceledError'
                ) {
                    return;
                }

                setError('Failed to load products!');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

        return () => {
            controller.abort();
        };
    }, []);

    if (loading) return <Preloader />;
    if (error) return <p className='error'>{error}</p>;

    return (
        <main>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProductsPage;
