import type { CartProps } from '../../../types';

const Cart = ({ products }: CartProps) => (
    <div className='cart-container'>
        <h3>Cart</h3>

        <ul className='cart-list'>
            {products.map((product) => (
                <li key={product.id} className='cart-list-item'>{product.title}</li>
            ))}
        </ul>
    </div>
);

export default Cart;
