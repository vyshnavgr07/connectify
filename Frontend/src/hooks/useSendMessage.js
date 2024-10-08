import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import api from '../api/axiosInterceptor';

const useSendMessage = () => {
const[loading,setLoading]=useState(false);
const {message,setMessage,selectedConversation}=useConversation();


const sendMessage=async(message)=>{
    setLoading(true)
try {
const response=await api.post(`messages/send/${selectedConversation._id}`,message)
console.log(response,"resss")
} catch (error) {
    console.log(error,"error")
}finally{
setLoading(false)
}
}

return {loading,sendMessage}

}

export default useSendMessage