import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => {
  console.log(message,"message")
  const {authUser}=useAuthContext()
  const {selectedConversation} =useConversation()
  const fromMe=message?.senderId===authUser._id;
  const chatClassName=fromMe? 'chat-end':'chat-start';
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

export default Message




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