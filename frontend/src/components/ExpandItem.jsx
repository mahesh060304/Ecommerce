import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import { useParams } from 'react-router-dom';
import useDetails from '../utils/useDetails';
import axios from 'axios';

const ExpandItem = () => {
    const params=useParams();
    const {details}=useDetails(params);

    // const [cart,setCart]=useState([]);
    const addtoCart=async(item)=>{
      const res=await axios.post("http://localhost:5000/cart/addtocart",{
        title:item.title,
        description:item.description,
        imageURL:item.imageURL,
        amount:item.amount
      })
      const data=res.data;
    console.log(data);


    }

    const [selectedSize,setselectedSize]=useState("S");
    const handleSize=(size)=>{
      setselectedSize(size);
    }
  return (
    <>
      <div style={{margin:"5%",display:'flex',width:"90%"}}>
        <div style={{marginRight:"10%",width:"25%"}}>
          <img src={details.imageURL} alt="" />
        </div>
        <div style={{fontFamily:"arial",width:"75%"}}>
          <div style={{fontSize:"40px"}}>{details.title}</div>
          <div style={{fontSize:"25px",color:"grey"}}>{details.description}</div>
          <div style={{fontSize:"40px"}}>&#8377; {details.amount}</div><br />
          <div>
            <div style={{fontFamily:"arial",fontSize:"20px"}}>Size</div><br />
            <div>
              <button onClick={()=>handleSize("S")} style={{marginLeft:"5%",padding:"1% 4%",border:selectedSize==="S"?"2px solid blue":"1px solid grey"}}>S</button>
              <button onClick={()=>handleSize("M")} style={{marginLeft:"5%",padding:"1% 4%",border:selectedSize==="M"?"2px solid blue":"1px solid grey"}}>M</button>
              <button onClick={()=>handleSize("L")} style={{marginLeft:"5%",padding:"1% 4%",border:selectedSize==="L"?"2px solid blue":"1px solid grey"}}>L</button>
              <button onClick={()=>handleSize("XL")}style={{marginLeft:"5%",padding:"1% 4%",border:selectedSize==="XL"?"2px solid blue":"1px solid grey"}}>XL</button>
            </div>
          </div><br /><br />
          <div>
            <button 
            onClick={()=>addtoCart({title:details.title,description:details.description,imageURL:details.imageURL,amount:details.amount,size:selectedSize})} 
            style={{backgroundColor:"#FB641B",color:"white",fontFamily:"arial",border:"none",padding:"2% 4%",marginRight:"5%"}}><AddShoppingCartIcon/> &nbsp;&nbsp;ADD TO CART</button>
            <button style={{backgroundColor:"#FF9F00",color:"white",fontFamily:"arial",border:"none",padding:"2% 5%"}}><BoltIcon style={{fontSize:"30px"}}/> &nbsp;&nbsp;BUY NOW</button>
          </div>
        </div>

      </div>
      

    </>
  )
}

export default ExpandItem
