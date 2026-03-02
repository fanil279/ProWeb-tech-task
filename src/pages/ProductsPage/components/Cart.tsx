import type { CartProps } from '../../../types';

const Cart = ({ items }: CartProps) => (
    <div className='cart-container'>
        <h3>Cart</h3>

        <ul className='cart-list'>
            {items.map((title) => (
                <li key={title} className='cart-list-item'>{title}</li>
            ))}
        </ul>
    </div>
);

export default Cart;
