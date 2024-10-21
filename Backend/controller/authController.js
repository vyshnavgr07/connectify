import User from "../modal/userModal.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import  sendOtp from "../utils/otp/sendOtp.js";
import verifyOtp from '../utils/otp/verifyOtp.js'

export const signUp = async (req, res) => {
  try {
    const { fullName, email, password, gender } = req.body;
    const user = await User.findOne({ email});
    if (user) {
      if(user.isVarified){
        return res.status(400).json({
          error: "Username already exist",
        })
      }else{
        const otp=await sendOtp(user)
         return res.status(otp.status).json({
            message:otp.message,
          
       });
      }
    
    }
  const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      gender,
      password: hash,
    });

    if (newUser) {
    await newUser.save();
    const otp=await sendOtp(newUser)
   return res.status(otp.status).json({
        message:otp.message,
       });
    } else {
      return res.status(400).json({
        error: "invalid user data",
      });
    }
  } catch (error) {
    console.log(error, "err");
    return res.status(500).json({
      error: "internal server error",
    });
  }
};


export const otpVerify=async(req,res)=>{
try {
  const {email,otp}=req.body;
 const response=await verifyOtp(email,otp)
  if(response.status==200){
  const user=await User.findOneAndUpdate({email},{$set:{isVarified:true}},{new:true}).select('-password -expirationDate -createdAt -__v ');
  console.log(user,"userrr")
  
  const token=await generateToken(user._id)
   return res.status(200).json({
    message: "user verified succesfully",
    user,
    token
  });


  }
  console.log(response)
} catch (error) {
  console.log(error,'errr')
}
}







export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
       if(user){
          if(!user.isVarified){ 
            return res.status(400).json({
              error: "invalid user credential",
            });
          }
         
        }

           if(!user){
                   return res.status(400).json({
              error: "invalid user credential",
            });}

            if(!user.isVarified){
              return res.status(400).json({
         error: "invalid user credential",
       });}



        const isValid=await bcrypt.compare(password,user.password || "")
        if(!isValid){
            return res.status(400).json({
                error: "invalid user credential",
              });
        }
     const token=generateToken(user._id,res)

     const users={_id:user._id,
     fullName:user.fullName,
     email:user.email,
     profilepic:user.profilepic}

        
     
     res.status(200).json({token,users})
    } catch (error) {
        console.log(error, "err");
        return res.status(500).json({
          error: "internal server error",
        });
    }
}


export const logout=async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({
            message:"Logged out succesfully"
        })
    } catch (error) {
        console.log(error, "err");
        return res.status(500).json({
          error: "internal server error",
        });
    }
}