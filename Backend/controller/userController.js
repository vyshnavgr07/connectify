import User from "../modal/userModal.js";

export const getUser=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const allUser=await User.find({$and:[{_id:{$ne:loggedInUserId}},{isVarified:true}]}).select("-password")
        res.status(200).json(allUser )
    } catch (error) {
        console.log(error,"err")
        res.status(500).json({
            error:"internal server error"
        })
    }
}