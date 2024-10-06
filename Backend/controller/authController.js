import User from "../modal/userModal.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, gender } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: "Username already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      username,
      gender,
      password: hash,
    });

    if (newUser) {
        generateToken(newUser._id,res)
      await newUser.save();

      return res.status(201).json({
        message: "succesfully created",
        newUser,
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


export const login=async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
        const isValid=await bcrypt.compare(password,user.password || "")
        if(!user || !isValid){
            return res.status(400).json({
                error: "invalid user credential",
              });
        }
        generateToken(user._id,res)
        res.status(200).json({
          _id:user._id,
          fullName:user.fullName,
          username:user.username,
          profilepic:user.profilepic        })
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