import Cart from "../models/cart.js";
import mongoose from "mongoose";

export const getAllProduct=async(req,res)=>{
    let products;
    try{
        products=await Cart.find();
    }catch(err){
        console.log(err);
    }
    if(!products){
        return res.status(404).json({message:"no Products found"});
    }
    return res.status(200).json({products});
}
export const addProduct=async(req,res)=>{
    const {title,description,imageURL,amount}=req.body;
    let ap=new Cart({
        title,
        description,
        imageURL,
        amount,
    });
    try{
        // const session=await mongoose.startSession();
        // session.startTransaction();
        // await ap.save({session});
        // await session.commitTransaction();
        await ap.save();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err});
    }
    return res.status(200).json({ap});
}

// export const deleteProduct=async(req,res)=>{

// }