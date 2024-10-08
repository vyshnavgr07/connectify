import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import api from '../api/axiosInterceptor';

const useGetMessages = () => {
const [loading,setLoading]=useState(false)
const {messages,setMessages,selectedConversation}=useConversation();


useEffect(()=>{
const getMessage=async()=>{
    setLoading(true)
    try {
        console.log(selectedConversation._id,"iddd")
        const response=await api.get(`messages/${selectedConversation._id}`)
        setMessages(response.data)
        
    } catch (error) {
        console.log(error,"err")
    }finally{
setLoading(false)
    }
}

if(selectedConversation?._id) getMessage();

},[selectedConversation?._id,setMessages])
return {loading,messages}
}



export default useGetMessages