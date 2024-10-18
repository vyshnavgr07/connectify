import express from "express";
const router=express.Router();
import {signUp,login,logout,otpVerify} from '../controller/authController.js'
router.post('/signup',signUp)
.post('/verify',otpVerify)
.post('/login',login)
.post('/logout',logout)

export default router; 