import express from "express";
import { Router } from "express";
import { adminLogin, loginUser, registerUser } from "../controllers/userController.js";

const userRoutes=express.Router();

userRoutes.post('/login',loginUser)
userRoutes.post('/register',registerUser)
userRoutes.post('/admin',adminLogin)

export default userRoutes