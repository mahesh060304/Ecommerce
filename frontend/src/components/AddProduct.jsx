import React, { useState } from 'react'
import axios from 'axios';

const AddProduct=()=>{
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
    amount: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs);

  const sendRequest=async()=>{
    let res=await axios.post(`http://localhost:5000/ap/mensadd`,{
      title:inputs.title,
      description:inputs.description,
      imageURL:inputs.imageURL,
      amount:inputs.amount
    })
    const data=res.data;
    console.log(data);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      sendRequest();
  }


  return (
    <div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
     <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
          <input type="text" id="form3Example2" className="form-control form-control-lg" value={inputs.title}  name='title' onChange={handleChange()} 
           placeholder="Enter the title" />
          </div>

          <div className="form-outline mb-4">
          <input type="text" id="form3Example2" className="form-control form-control-lg" value={inputs.description} name='description' onChange={handleChange()}         
           placeholder="Enter the description" />
          </div>

          <div className="form-outline mb-4">
          <input type="text" id="form3Example2" className="form-control form-control-lg" value={inputs.imageURL} name='imageURL' onChange={handleChange()} 
           placeholder="Enter imageURL" />
          </div>

          <div className="form-outline mb-4">
          <input type="text" id="form3Example2" className="form-control form-control-lg" value={inputs.amount} name='amount' onChange={handleChange()} 
           placeholder="Enter the amount" />
          </div>
          <button type="submit">Add</button>

          </form>

      </div>
      
    </div>
  )
}

export default AddProduct;
