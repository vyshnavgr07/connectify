import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation,setSelectedConversation } = useConversation();
 const isSelected =conversation?._id===selectedConversation?._id;
 const {onlineUsers}=useSocketContext()
 console.log(onlineUsers,"online users")
 console.log(conversation._id,"online users")
 console.log(onlineUsers?.includes(conversation._id))
 const isOnline=onlineUsers?.includes(conversation._id)
 console.log(isOnline,"status")
return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer
          ${isSelected ? "bg-blue-500" : ""}`}
        onClick={()=>setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline?"online":""}`}>
          <div className="w-12 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation?.fullName}</p>
            <span className="text-xl">😊</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
