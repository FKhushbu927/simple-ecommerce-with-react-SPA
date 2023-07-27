import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;

     
    return (
        <div className='product'>
             <img src={img} alt="" />
              <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p className='product-price'>Price: ${price}</p>
                <p className='manufacturer'>Manufacturer: ${seller}</p>
                <p className='ratings'>Ratings: ${ratings}</p>
              </div>
              <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;