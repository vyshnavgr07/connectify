import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client';
import { useAuthContext } from './AuthContext';

export const socketContext = createContext();


export const useSocketContext=()=>{
    return useContext(socketContext)
}



export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();
useEffect(() => {
        if (authUser) {
            const socket = io("https://connectify-1swz.onrender.com",{
                query:{
                    userId:authUser?._id
                }
});
   

            socket.on('connect', () => {
                console.log('Connected to the server, socket id:', socket.id);
            });

            socket.on('connect_error', (err) => {
                console.error('Connection error:', err);
            });

            socket.on('disconnect',(reason) => {
                console.log('Disconnected:', reason);
            });

            setSocket(socket);

           socket.on("getOnlineUsers",(users)=>{
          setOnlineUsers(users)
           })


            return () =>{
            socket.disconnect()
             }

        } else {
            if (socket) {
                socket.disconnect();
                setSocket(null);
            }
        }
    }, [authUser]); 

    return (
        <socketContext.Provider value={{socket, onlineUsers }}>
            {children}
        </socketContext.Provider>
    );
};
