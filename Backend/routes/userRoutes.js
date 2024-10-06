import express from "express";
import verifyToken from "../middleware/verifyToken.js";
const router=express.Router();
import {getUser} from '../controller/userController.js'


router.get("/",verifyToken,getUser)









export default router;