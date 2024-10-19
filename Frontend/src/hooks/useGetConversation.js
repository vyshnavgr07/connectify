import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import api from "../api/axiosInterceptor";

const useGetConversation = () => {
const [loading,setLoading]=useState(false);
const [conversation,setConversation]=useState([])

useEffect(()=>{
const getConversation=async()=>{
    setLoading(true)
    try {
const response=await api.get('users')
console.log(response,'resss  ')
if(response.status===200){
         setConversation(response.data)
        }
    } catch (error) {
        console.log(error,"err in get conversation hook")
    }finally{
setLoading(false)
    }
}

getConversation()
},[])

return{loading,conversation}

}

export default useGetConversation