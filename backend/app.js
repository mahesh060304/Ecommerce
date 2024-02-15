import express from "express";
import mongoose from "mongoose";
import Aprouter from "./routes/ap_route.js";
import Userrouter from "./routes/user_route.js";
import Waprouter from "./routes/wap_route.js";
import Cartrouter from "./routes/cart_route.js";
import cors from 'cors';

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());// app.get("/api/getproducts", getAllProduct);

mongoose.connect("mongodb://127.0.0.1:27017/fashion").then(()=>{
    console.log("Connected to db");
})

app.use("/ap",Aprouter);
app.use("/user",Userrouter);
app.use("/wap",Waprouter);
app.use("/cart",Cartrouter);


// // mongoose.connect('mongodb+srv://maheshk2021cseb:mahesh060304@cluster0.ygf7lmj.mongodb.net/?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log('Connected to db and listening at 5173')).catch((err)=>console.log(err));



app.listen(5000,()=>{
    console.log("server listening at 5000");
})
  