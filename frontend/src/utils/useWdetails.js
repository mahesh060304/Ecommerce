import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const useWdetails = (id) => {
    const [details,setDetails]=useState([]);

  useEffect(()=>{
    fetchDetails()
},[])

  const fetchDetails=async()=>{
    const res=await axios.get(`http://localhost:5000/wap/products/${id.id}`);
    const data=await res.data;
    console.log(data);

    setDetails(data);
  }



  return {details}
}

export default useWdetails