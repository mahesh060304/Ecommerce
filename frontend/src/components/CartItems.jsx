import React, { useState } from 'react';
import { TabScrollButton } from '@mui/material';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faMinus,faXmark} from '@fortawesome/free-solid-svg-icons';

const CartItems = (product) => {
  console.log(product);
  const [quantity,setQuantity]=useState(1);
  return (
    <div >

    <div className='items-info'>
      <div className='product-img'>
        <img src={product.product.imageURL} alt="" />
      </div>
      <div className='title'>
        <h2>{product.product.title}</h2>
        <p>{product.product.description}</p>
      </div>
      <div className='add-minus-quantity'>
      <button onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}><FontAwesomeIcon icon={faMinus} /></button>
        <p>{quantity}</p>
        <button onClick={()=>setQuantity(quantity+1)}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      <div className='price'>
        <h3>&#8377; {product.product.amount}</h3>
      </div>
      <div className='remove-item'>
        <FontAwesomeIcon icon={faXmark} />
      </div>
</div>
<hr />
</div>

  )
}

export default CartItems;


