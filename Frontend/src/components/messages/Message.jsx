import React, { useMemo,memo } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => {
  const {authUser}=useAuthContext()
  const {selectedConversation} =useConversation()
  console.log(message?.senderId,'auth')
  // const fromMe=message?.senderId===authUser._id;
const fromMe = useMemo(() => {
    const isFromMe = message?.senderId === authUser._id;
    return isFromMe;
  }, [message?.senderId, authUser._id]);
  const chatClassName=fromMe?'chat-end':'chat-start';
  console.log(chatClassName)
  const bubbleBgColor=fromMe?'bg-blue-500':"";
function extractTime(createdAt) {
    if (!createdAt) return '';
  const date = new Date(createdAt);
let hours = date.getHours();
    const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
return `${hours}:${formattedMinutes} ${ampm}`;
  }
  let formattedTime=extractTime(message?.createdAt)
  return (
    <div className={`chat ${chatClassName}`}>
     <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
           <img
           alt='Tailwind css chat bubble component'
           src='https://esribelux.com/wp-content/uploads/2024/03/user-types-tls-professional-plus-2.jpg'
           />
       </div>
         </div>

         <div>
            <div className={`chat-bubble text-white ${bubbleBgColor}pb-2`}>{message?.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{formattedTime}</div>
         </div>
    </div>
  )
}

export default memo(Message)




// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//          <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//            <img
//            alt='Tailwind css chat bubble component'
//            src='https://esribelux.com/wp-content/uploads/2024/03/user-types-tls-professional-plus-2.jpg'
//            />
//        </div>
//          </div>

//          <div>
//             <div className={`chat-bubble text-white bg-blue-500`}>Hi what is up</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center '>12:42</div>
//          </div>
//     </div>
//   )
// }

// export default Message