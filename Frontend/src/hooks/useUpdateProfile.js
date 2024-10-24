import { useState } from "react"
import api from "../api/axiosInterceptor";
import { useAuthContext } from "../context/AuthContext";


const useUpdateProfile = () => {
  const[loading,setLoading] =useState(false);
  const {setAuthUser}=useAuthContext();
  const update=async(data)=>{
    setLoading(true)
    try {
      const response=await api.put('users',data)
       console.log(response,'ress')
         if(response.status==200){
          const user=response.data
          localStorage.setItem('user', JSON.stringify(user));
          setAuthUser(user)
          return user
         }else{
          throw new Error('updation failed')
         }
     
    } catch (error) {
        console.log(error,'errr')
    }finally{
     setLoading(true)
    }

    
  }


  return {loading,update}
}

export default useUpdateProfile