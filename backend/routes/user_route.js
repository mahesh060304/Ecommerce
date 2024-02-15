import express from "express";
import { signup,login } from "../controllers/user_controller.js";

const Userrouter=express.Router();

 Userrouter.post("/signup",signup);
 Userrouter.post("/login",login);

 export default Userrouter;
