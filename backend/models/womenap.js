import mongoose from "mongoose";
let Schema=mongoose.Schema;
const WApSchema=new Schema({
    // id:{
    //     type:"number",
    //     required:true,
    // },
    title:{
        type:"String",
        required:true,
    },
    description:{
        type:"String",
        required:true,
    },
    imageURL:{
        type:"String",
        required:true,
    },
    amount:{
        type:"number",
        required:true,
    }
})

export default mongoose.model("Wap",WApSchema);