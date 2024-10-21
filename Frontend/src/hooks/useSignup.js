import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import api from "../api/axiosInterceptor"

const useSignup = () => {
  const[loading,setLoading]=useState(false)
 const signupp=async(data)=>{
  console.log('api',api)
try {
const response=await api.post('auth/signup',data)
if(response.status==201){
  return response
}else{
  throw new Error('something went wrong')
}

} catch (error) {
  console.log(error)  
  toast.error(error.message)
}finally{
    setLoading(false)
}

  }

return {loading,signupp}

}

export default useSignup