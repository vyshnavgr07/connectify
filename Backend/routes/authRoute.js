import express from "express";
const router=express.Router();
import {signUp,login,logout} from '../controller/authController.js'
router.post('/signup',signUp)
.post('/login',login)
.post('/logout',logout)

export default router; 