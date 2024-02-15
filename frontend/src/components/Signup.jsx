import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';


const Signup = () => {
  const dispatch=useDispatch();
    const navigate=useNavigate();

    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
      })
    
      const handleChange=(e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
        }))
      }


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("http://localhost:5000/user/signup",{
                  name:inputs.name,
                  email:inputs.email,
                  password:inputs.password
            })
            if(res.data.name===""||res.data.email===""||res.data.password===""){
              toast.error("All fields needs to be filled");
            }
            else if(res.status===200){
              // console.log(res.data.name);
              dispatch(authActions.login());
              toast.success("Signed Up Successfully");
              navigate("/mens");
            }
          }catch(err){
            if(err.response.status===400){
              toast.error(err.response.data.message);
            }
          }

    }
  return (
    <>  
    <section className="vh-100">
      <div className="container py-5 h-90">
        <h2 style={{textAlign:"center",fontFamily:"Noto Sans",fontWeight:"1000",fontSize:"25px"}}>REGISTER</h2>
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"/>
            </div>
      
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1" style={{fontFamily:"Noto Sans"}}>
              <form onSubmit={handleSubmit} >

                <div className="form-outline mb-4">
                <input type="text" id="form3Example2" className="form-control form-control-lg" 
                    placeholder="Enter a valid username" name='name' 
                    value={inputs.name} onChange={handleChange} 
                />
                </div>
          
                <div className="form-outline mb-4 ">
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" name='email'  
                    value={inputs.email} onChange={handleChange} 
                />
                </div>
          
                <div className="form-outline mb-3 mt-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" name='password' 
                    value={inputs.password} onChange={handleChange} 
                />
                </div>
          
                <button type="submit" className="btn btn-primary btn-lg btn-block mt-3">Register</button>
          
                {/* <p className="large fw-bold mt-4 pt-1 mb-0" style={{fontFamily:"Roboto"}}>
                {isSignup?"Already have an account? ":"Don't have an account? "}
                    <button style={{border:"none",color:"#cc3333",backgroundColor:"transparent",fontWeight:"bold",fontFamily:"Roboto"}}  onClick={()=>setsignup(!isSignup)}>{isSignup?"Login":"Register"}</button>
                  </p> */}
        </form>
      </div>
    </div>
  </div>
</section>
     
    </>
  )
}

export default Signup;
