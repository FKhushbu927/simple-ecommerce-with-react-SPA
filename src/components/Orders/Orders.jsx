import React, { useState } from 'react';
import Cart from './../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const initialCart = useLoaderData();
    const [orderedCart, setOrderedCart] = useState(initialCart)
 
    const handleRemoeFromCart = (id) => {
        const remaining = orderedCart.filter(product => product.id !== id);
          setOrderedCart(remaining);

          removeFromDb(id);

    }
    return (
        <div className="shop-container">
             <div className="review-container">
                 {
                         orderedCart.map(product =>  <ReviewItem
                          key = {product.id}
                          product = {product}
                          handleRemoeFromCart={handleRemoeFromCart}
                        ></ReviewItem>)

                  }
             </div>
             <div className="cart-container">
                <Cart cart ={orderedCart}></Cart>
             </div>
        </div>
    );
};

export default Orders;