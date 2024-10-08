import { createContext, useEffect, useState } from "react";
import io from 'socket.io-client';
import { useAuthContext } from './AuthContext';

export const socketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socketss, setSocketss] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:4444");
            socket.on('connect', () => {
                console.log('Connected to the server, socket id:', socket.id);
            });

            socket.on('connect_error', (err) => {
                console.error('Connection error:', err);
            });

            socket.on('disconnect', (reason) => {
                console.log('Disconnected:', reason);
            });

            setSocketss(socket);
            return () => socket.close();
        } else {
            if (socketss) {
                socketss.close();
                setSocketss(null);
            }
        }
    }, [authUser]); // Dependency on authUser

    return (
        <socketContext.Provider value={{ socketss, onlineUser }}>
            {children}
        </socketContext.Provider>
    );
};
