import Button from '../../../../components/Button';
import type { AddToCartModalProps } from '../../../../types';

const AddToCartModal = (
    { productTitle, onYes, onNo }: AddToCartModalProps
) => (
    <div className='add-to-cart-modal-overlay'>
        <div className='add-to-cart-modal'>
            <h1>Add to Cart</h1>

            <div className='button-container'>
                <Button variant='success'
                    onClick={() => onYes(productTitle)}
                >
                    Yes
                </Button>
                <Button variant='danger' onClick={onNo}>No</Button>
            </div>
        </div>
    </div>
);

export default AddToCartModal;
