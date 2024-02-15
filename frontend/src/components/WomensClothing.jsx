import React,{useState,useEffect} from 'react';
import Product from './Product';
import axios from 'axios';
import { Link} from 'react-router-dom';



const WomensClothing=()=> {


  const [product,setProduct]=useState([]);
  const sendRequest=async()=>{
    try{
      const res=await axios.get("http://localhost:5000/wap/wgp")
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
  if(product.length===0){
    return <div style={{textAlign:"center",alignItems:"center"}}>LOADING....</div>
  }

  
  return (
    <>
    {/* <font><Link to="/addproducts">Add Products</Link></font> */}
    <div className='mens-container'>
     {product.map((product,rindex)=>{
           return  <Product key={rindex} product={product}/>
     })}
     </div>
    </>
  )
}


export default WomensClothing;

