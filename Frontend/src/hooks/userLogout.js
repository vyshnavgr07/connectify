import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import api from "../api/axiosInterceptor";
export const useLogout=()=>{
    const [loading,setLoading]=useState(false);
    const{setAuthUser}= useAuthContext()
    const logOut=async()=>{
        setLoading(true)
        try {
            const response=await api.post('auth/logout')
             if(response.status===200){
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                setAuthUser(null)
             }
        } catch (error) {
            console.log(error,"err")
        }finally{
setLoading(false)
        }
    }

    return {loading,logOut}
}