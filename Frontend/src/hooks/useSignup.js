import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

import { useAuthContext } from "../context/AuthContext"
import api from "../api/axiosInterceptor"

const useSignup = () => {
  const[loading,setLoading]=useState(false)
  const{setAuthUser}=useAuthContext()
  const signupp=async(data)=>{
try {
const response=await api.post('api/auth/signup',data)
const userData=await response.data.newUser;
if(!userData){
    throw new Error(data.error)
}
localStorage.setItem('user', JSON.stringify(userData));
localStorage.setItem("token",response.data.token)
setAuthUser(userData)
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