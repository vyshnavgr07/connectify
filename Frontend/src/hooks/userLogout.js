import axios from "axios";
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
export const useLogout=()=>{
    const [loading,setLoading]=useState(false);
    const{setAuthUser}= useAuthContext()
    const logOut=async()=>{
        setLoading(true)
        try {
            const response=await axios.post('http://localhost:4444/api/auth/logout')
             if(response.status===200){
                localStorage.removeItem("user")
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