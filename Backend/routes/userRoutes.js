import express from "express";
import verifyToken from "../middleware/verifyToken.js";
const router=express.Router();
import {getUser,updateProfile} from '../controller/userController.js'
import uploadImage from "../middleware/imageUploads.js";


router.get("/",verifyToken,getUser)
.put("/",verifyToken,updateProfile)









export default router;