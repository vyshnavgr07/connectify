import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import api from '../api/axiosInterceptor';

const useSendMessage = () => {
const[loading,setLoading]=useState(false);
const {messages,setMessages,selectedConversation}=useConversation();


const sendMessage=async(data)=>{
setLoading(true)
try {
const response=await api.post(`messages/send/${selectedConversation._id}`,data)
console.log(response,"ress")
if(response.status==201){
    setMessages([...messages,response.data.message])
}
} catch (error) {
    console.log(error,"error")
}finally{
setLoading(false)
}
}

return {loading,sendMessage}

}

export default useSendMessage