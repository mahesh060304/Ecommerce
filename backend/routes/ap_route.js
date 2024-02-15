import express from "express";
import { addProduct,getAllProduct,getProductById} from "../controllers/ap_controller.js";
const Aprouter=express.Router();

Aprouter.get("/gp",getAllProduct);
Aprouter.post("/mensadd",addProduct);
Aprouter.get("/products/:_id",getProductById);

 export default Aprouter;