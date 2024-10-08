import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import api from "../api/axiosInterceptor";



function useLogin(){
const [loading,setLoading]=useState(false);
const {setAuthUser}=useAuthContext()
const login=async(data)=>{
setLoading(true)
try {
const response=await api.post("auth/login",data)


if(response.status===200){
    localStorage.setItem("user",JSON.stringify(response.data))
    localStorage.setItem("token",response.data.token)
    setAuthUser(response.data)
}

} catch (error) {
    console.log(error)
 }finally{
    setLoading(false)
}

}

return {loading,login}

}



export default useLogin