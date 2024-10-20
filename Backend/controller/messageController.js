import Conversation from "../modal/conversationModal.js";
import Message from "../modal/messageModal.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage=async(req,res)=>{
   try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user.userId;
let  conversation=  await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
})


if(!conversation){
    conversation=await Conversation.create({
        participants:[senderId,receiverId],
    })
}
let newMessage=new Message({
    senderId,receiverId,message
})

if(newMessage){
    conversation.messages.push(newMessage._id)
}

await Promise.all([conversation.save(),newMessage.save()]);

const receiverSocketId=getReceiverSocketId(receiverId)
console.log('receiver',receiverSocketId)
if(receiverSocketId){
    io.to(receiverSocketId).emit("newMessage",newMessage)
    console.log('receiverSocketId',receiverSocketId)
   
}

return res.status(201).json(newMessage)

   } catch (error) {
    console.log(error,"errr")
    return  res.status(500).json({
        error:"internal server error"
    })
   } 
}

export const getMessage=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderid=req.user.userId;
        console.log(senderid,"sender",userToChatId)
        const conversation=await Conversation.findOne({
            participants:{$all:[senderid,userToChatId]}
        }).populate('messages')

     

        if(!conversation){   
            return  res.status(200).json({
                message:"no message"
            })
        }

   const messages=conversation.messages;

      return  res.status(200).json(
            messages
            )

    } catch (error) {
        console.log(error,"errr")
        return  res.status(500).json({
            error:"internal server error"
        })
       
    }
}