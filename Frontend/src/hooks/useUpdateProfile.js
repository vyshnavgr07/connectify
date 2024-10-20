import { useState } from "react"
import api from "../api/axiosInterceptor";


const useUpdateProfile = () => {
  const[loading,setLoading] =useState(false);
  
  const signup=async(data)=>{
    setLoading(true)
    try {
        
    } catch (error) {
        console.log(error,'errr')
    }finally{
     setLoading(true)
    }
   const user=api.put('users',data)
    
  }


  return {loading,signup}
}

export default useUpdateProfile