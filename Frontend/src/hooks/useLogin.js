import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";



function useLogin(){
const [loading,setLoading]=useState(false);
const {setAuthUser}=useAuthContext()
const login=async(data)=>{
setLoading(true)
try {
const response=await axios.post("http://localhost:4444/api/auth/login",data)

if(response.status===200){
    localStorage.setItem("user",JSON.stringify(response.data))
    localStorage.setItem("token",response.data.token)
    setAuthUser(response.data)
}
console.log(response,"resss")
} catch (error) {
    toast.error(error.message)
}finally{
    setLoading(false)
}

}

return {loading,login}

}



export default useLogin