import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversation = () => {
const [loading,setLoading]=useState(false);
const [conversation,setConversation]=useState([])

useEffect(()=>{
const getConversation=async()=>{
    setLoading(true)
    try {
console.log(token,"tokennn")
        const response=await axios.get('http://localhost:4444/api/users')
        console.log(response,"ress")
        if(response.status===200){
         setConversation(response.data)
        }
    } catch (error) {
        toast.error(error.message)
    }finally{
setLoading(false)
    }
}

getConversation()
},[])

return{loading,conversation}

}

export default useGetConversation