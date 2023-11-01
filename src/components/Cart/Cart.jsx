import React from 'react';
import './Cart.css';
import Product from '../Product/Product';

const Cart = ({cart}) => { 
    let totalPrice = 0;
    let totalPriceShipping = 0;
    let quantity = 0;
    
    for(let product of cart){
     totalPrice = totalPrice + product.price * product.quantity;
     totalPriceShipping = totalPriceShipping + product.shipping;
     quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalPriceShipping + tax;
    // console.log(cart);

    return (
        <div className='cart'>
            <h4>Order Summary </h4>
            <div className='cart-info'>
                <p>Selected Items: {cart.length}</p>
                <p> totalPrice Price:${totalPrice}</p>
                <p> totalPrice Shipping: ${totalPriceShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
            </div>

        </div>
    );
};

export default Cart;