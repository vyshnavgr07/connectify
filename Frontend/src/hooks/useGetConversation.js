import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import api from "../api/axiosInterceptor";

const useGetConversation = () => {
const [loading,setLoading]=useState(false);
const [conversation,setConversation]=useState([])

useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const response = await api.get('users'); // Replace 'users' with your API endpoint
        if (response.status === 200) {
          setConversation(response.data);
        }
      } catch (error) {
        console.log(error, "err in get conversation hook");
      } finally {
        setLoading(false);
      }
    };

    getConversation(); // Initial fetch

    const intervalId = setInterval(() => {
      getConversation(); // Fetch conversations periodically
    }, 300000); // 5 minutes

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
    };
  }, []); 





// useEffect(()=>{
// const getConversation=async()=>{
//     setLoading(true)
//     try {
   
// const response=await api.get('users')
// if(response.status===200){
//          setConversation(response.data)
//         }
//     } catch (error) {
//         console.log(error,"err in get conversation hook")
//     }finally{
// setLoading(false)
//     }
// }

// getConversation()
// },[])

return{loading,conversation}

}

export default useGetConversation