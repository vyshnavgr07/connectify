import express from "express";
const router=express.Router();
import {sendMessage,getMessage} from '../controller/messageController.js'
import verifyToken from "../middleware/verifyToken.js";
router.post('/send/:id',verifyToken,sendMessage),
router.get("/:id",verifyToken,getMessage)





export default router;