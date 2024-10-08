import express from "express"
import env from 'dotenv'
import morgan from "morgan";
import cors from 'cors';
import { app,server } from "./socket/socket.js";
env.config()
const port=process.env.PORT
import dbConnect from "./db/dbConnection.js";
import authRouter from './routes/authRoute.js';
import userRoutes from './routes/userRoutes.js'
import messageRouter from './routes/messageRoute.js';
import cookieParser from "cookie-parser";
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())
app.use("/api/auth",authRouter)
app.use("/api/messages",messageRouter)
app.use("/api/users",userRoutes)


server.listen(port,()=>{
    dbConnect()
    console.log(`server is running on port:${port}`)
})