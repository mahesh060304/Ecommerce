import express from "express";
import { addProduct,getAllProduct, getProductById } from "../controllers/wap_controller.js";
const Waprouter=express.Router();

Waprouter.get("/wgp",getAllProduct);
Waprouter.post("/womensadd",addProduct);
Waprouter.get("/products/:_id",getProductById);

 export default Waprouter;