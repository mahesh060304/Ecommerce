import Wap from "../models/womenap.js";

export const getAllProduct=async(req,res)=>{
    let products;
    try{
        products=await Wap.find();
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
    let ap=new Wap({
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

export const getProductById=async(req,res)=>{
    let prod;       
    try{
        prod=await Wap.findById(req.params._id);
    }catch(err){
        console.log(err);
    }
    if(!prod){
        return res.status(404).json({message:"no Products found"});
    }
    return res.status(200).json(prod);
}