import React from 'react';
import './RiviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleRemoeFromCart}) => {
    const {id, name,price, img, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='review-pro-title'>{name}</p>
                <p>Price:<span className='orange-text'> ${price}</span></p>
                <p>Quantity:<span className='orange-text'> ${quantity}</span></p>
               
            </div>
            <button  onClick={()=> handleRemoeFromCart(id)}  className='btn-delete'>
   
                 <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
            {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
            </button>
        </div>
    );
};

export default ReviewItem;