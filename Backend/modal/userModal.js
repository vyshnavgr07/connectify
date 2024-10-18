import mongoose from "mongoose";


const userschema=mongoose.Schema({
fullName:{
    type:String,
    required:true,
    },
   email:{
        type:String,
        required:true,
        unique:true         
    },
    password:{
        type:String,         
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilepicture:{
        type:String,
        default:"",
    },
    isVarified:{
        type:Boolean,
        default:false
    },
    expirationDate: {
        type: Date,
        default: () => Date.now() + 10 * 60 * 1000,
      },
},{timestamps:true})


const User=mongoose.model("User",userschema);

export default User;