import { createContext, useEffect, useState } from "react";
import io from 'socket.io-client';
export const socketContext=createContext();


export const socketContextProvider=({chidren})=>{
    const [socketss,setSocketss]=useState(null)
    const [onlineUser,setOnlineUser]=useState([])
    const {authUser}= useAuthContext()
useEffect(()=>{
if(authUser){
const socket=io("http://localhost:4444");
setSocketss(socket)
return ()=>socket.close();
}else{
    if(socketss){
socketss.close();
setSocketss(null)
    }
}
},[])


  return  <socketContext.Provider  value={{socket,onlineUser}}>
{chidren}
    </socketContext.Provider >
}