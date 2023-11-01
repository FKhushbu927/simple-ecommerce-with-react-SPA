import React, { useState } from 'react';
import Cart from './../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Orders = () => {
    const initialCart = useLoaderData();
    const [orderedCart, setOrderedCart] = useState(initialCart)
    console.log(orderedCart)
    return (
        <div className="shop-container">
             <div className="review-container">
                 {
                         orderedCart.map(product =>  <ReviewItem
                          key = {product.id}
                          product = {product}
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