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

export const updateProfile = async (req, res) => {
    try {
        const data = req.body;
        const id = req.user.userId; // Assuming you have middleware that sets req.user
        const updatedUser = await User.findByIdAndUpdate(id, data, { new: true }).select('-password -expirationDate -createdAt -__v -updatedAt');

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Send the updated user as a response
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error, "err");
        res.status(500).json({
            error: "Internal server error"
        });
    }
};
