import React from 'react'
import { TabScrollButton } from '@mui/material';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faMinus,faXmark} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import CartItems from './CartItems';

const Addcart=()=> {
  const [quantity,setQuantity]=useState(1);
  const [product,setProduct]=useState([]);
  const sendRequest=async()=>{
    try{
      const res=await axios.get("http://localhost:5000/cart/getcartitems")
    const data=res.data;
    console.log(data);
    return data;

    }catch(err){
      console.log(err);
    } 
  }

  useEffect(()=>{
    try{
      sendRequest()
    .then(data=>{
      console.log("received data : ",data)
      setProduct(data.products);
      console.log(data.products);
    })
    }
    catch(err){
      console.log(err);
    } 
  },[]);
  return (
    <>
    {/* <font><Link to="/addproducts">Add Products</Link></font> */}
    <section className='main-cart-section'>
       <h2>SHOPPING CART</h2>
       <div className='cart-items'>
         <div className='cart-items-container'>
              {product.map((product,rindex)=>{
                return  <CartItems key={rindex} product={product}/>
              })}
       </div>
     </div>
   </section>
     
    </>
  )
}

export default Addcart;







{/* <section className='main-cart-section'>
      <h2>SHOPPING CART</h2>
      <div className='cart-items'>
        <div className='cart-items-container'>
          <div className='items-info'>
            <div className='product-img'>
              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70" alt="" />
            </div>
            <div className='title'>
              <h2>Deavish</h2>
              <p>Dark blue color</p>
            </div>
            <div className='add-minus-quantity'>
            <button onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}><FontAwesomeIcon icon={faMinus} /></button>
              <p>{quantity}</p>
              <button onClick={()=>setQuantity(quantity+1)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className='price'>
              <h3>&#8377; 749</h3>
            </div>
            <div className='remove-item'>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        <hr/>
        <div className='items-info'>
            <div className='product-img'>
              <img src="https://rukminim2.flixcart.com/image/612/612/l45xea80/shirt/r/d/a/-original-imagf4snhj4dcdtu.jpeg?q=70" alt="" />
            </div>
            <div className='title'>
              <h2>Allen Solley</h2>
              <p>Slim fit</p>
            </div>
            <div className='add-minus-quantity'>
            <button onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}><FontAwesomeIcon icon={faMinus} /></button>
              <p>{quantity}</p>
              <button onClick={()=>setQuantity(quantity+1)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className='price'>
              <h3>&#8377; 759</h3>
            </div>
            <div className='remove-item'>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
      </div>
    </section> */}

  //   <section className='main-cart-section'>
  //     <h2>SHOPPING CART</h2>
  //     <div className='cart-items'>
  //       <div className='cart-items-container'>
  //         <div className='items-info'>
  //           <div className='product-img'>
  //             <img src={product.imageURL} alt="" />
  //           </div>
  //           <div className='title'>
  //             <h2>Deavish</h2>
  //             <p>Dark blue color</p>
  //           </div>
  //           <div className='add-minus-quantity'>
  //           <button onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}><FontAwesomeIcon icon={faMinus} /></button>
  //             <p>{quantity}</p>
  //             <button onClick={()=>setQuantity(quantity+1)}><FontAwesomeIcon icon={faPlus} /></button>
  //           </div>
  //           <div className='price'>
  //             <h3>&#8377; 749</h3>
  //           </div>
  //           <div className='remove-item'>
  //             <FontAwesomeIcon icon={faXmark} />
  //           </div>
  //         </div>
  //       <hr/>
  //     </div>
  //   </div>
  // </section>
