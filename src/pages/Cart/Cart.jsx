import React, { useContext } from 'react';
import { ProductContext } from '../../provider/ProductProvider';

const Cart = () => {
    const {cart} = useContext(ProductContext);
    
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
            </div>
        </div>
    );
};

export default Cart;