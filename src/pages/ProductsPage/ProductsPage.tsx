import { useState, useEffect, useMemo } from 'react';
import Preloader from '../../components/Preloader';
import Input from './components/Input';
import Cart from './components/Cart';
import AddToCartModal from './components/modals/AddToCartModal';
import ProductService from '../../services/productService';
import { sleep } from '../../utils/sleep';
import { addUniqueToCart } from '../../utils/cart';
import type { Product } from '../../types';

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [cart, setCart] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
       const controller = new AbortController();

        const fetchProducts = async () => {
            try {
                await sleep(1000);

                const data = await ProductService.getProducts(controller.signal);
                setProducts(data);
            } catch (err) {
                if (err instanceof Error && err.name === 'CanceledError') return;

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

    const handleInputChange = (value: string) => setSearchQuery(value);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleModalYes = (title: string) => {
        if (!title) return;

        setCart((prev) => addUniqueToCart(prev, title));

        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleModalNo = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const filteredProducts = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();

        if (!q) return products;
        
        return products.filter((product) => {
            return product.title.toLowerCase().includes(q);
        });
    }, [products, searchQuery]);

    if (loading) return <Preloader />;
    if (error) return <p className='error'>{error}</p>;

    return (
        <>
            {cart.length > 0 && <Cart items={cart} /> }

            {isModalOpen && selectedProduct && (
                <AddToCartModal
                    productTitle={selectedProduct.title}
                    onYes={() => handleModalYes(selectedProduct.title)}
                    onNo={handleModalNo}
                />
            )}

            <Input value={searchQuery} onChange={handleInputChange} />
            
            <main>
                <h1>ProWeb Market</h1>

                <ul className='product-list'>
                    {filteredProducts.map((product) => (
                        <li
                            key={product.id}
                            onClick={() => handleProductClick(product)}
                            className='product-list-item'
                        >
                            <img src={product.thumbnail} alt={product.title} className='product-image' />
                            <h2 className='product-title'>{product.title}</h2>
                            <p className='product-description'>{product.description}</p>
                            <p className='product-price'>{product.price}$</p>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default ProductsPage;
