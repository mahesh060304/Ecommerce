import express from "express";
import { addProduct,getAllProduct} from "../controllers/cart_controller.js";
const Cartrouter=express.Router();

Cartrouter.get("/getcartitems",getAllProduct);
Cartrouter.post("/addtocart",addProduct);

export default Cartrouter;
