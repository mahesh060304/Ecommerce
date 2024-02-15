import User from "../models/user.js";
import bcrypt from 'bcryptjs';

 export const signup= async(req,res)=>{
    let {name,email,password}=req.body;
    let existUser;
    try{
        existUser=await User.findOne({email});
    }catch(err){
        console.log(err);
    }
    if(existUser){
        return res.status(400).json({message:"Already signed up Instead Login!"})
    }
    const hashedPassword=bcrypt.hashSync(password);

    const user=new User({
        name,
        email,
        password,
    })
    try{
       await user.save();
    }catch(err){
        console.log(err);
    }
    return res.status(200).json(user);
}   

export const login=async(req,res)=>{
    let {email,password}=req.body;
    let exUser;
    try{
        exUser=await User.findOne({email});
    }catch(err){
        console.log(err);
    }
    if(exUser){
        if(exUser.password===password){
            return res.status(200).json({data:exUser,message:"Logged in successfully"}); 
        }else{
            return res.status(400).json({message:"No user found"});

        }
        
    }else{
        return res.status(400).json({message:"No user found"});
    }
}