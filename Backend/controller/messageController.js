import Conversation from "../modal/conversationModal.js";
import Message from "../modal/messageModal.js";


export const sendMessage=async(req,res)=>{
   try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user._id;
    
  const conversation=  await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    })


if(!conversation){
    conversation=await Conversation.create({
        participants:[senderId,receiverId],
    })
}
const newMessage=new Message({
    senderId,receiverId,message
})

if(newMessage){
    conversation.messages.push(newMessage._id)
}

await conversation.save();
await newMessage.save();

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
        const senderid=req.user._id;
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