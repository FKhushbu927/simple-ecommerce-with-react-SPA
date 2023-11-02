import React, { useState } from 'react';
import Cart from './../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const initialCart = useLoaderData();
    const [orderedCart, setOrderedCart] = useState(initialCart)
 
    const handleRemoeFromCart = (id) => {
        const remaining = orderedCart.filter(product => product.id !== id);
          setOrderedCart(remaining);

          removeFromDb(id);

    }

    const handleClearCart = () => {
        setOrderedCart([]);
        deleteShoppingCart();
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
                <Cart
                cart ={orderedCart}
                handleClearCart= {handleClearCart}
                >

                   <Link to="/checkout"> 
                   <button className='btn-proceed'>Proceede Checkout</button>
                   </Link>
                </Cart>
                    
              
             </div>
        </div>
    );
};

export default Orders;