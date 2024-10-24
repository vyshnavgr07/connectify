import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
const {messages,loading}=useGetMessages();
console.log(messages,"messagesss")
useListenMessages()
const lastMessagesRef=useRef();


useEffect(()=>{
setTimeout(()=>{
  lastMessagesRef.current?.scrollIntoView({behaviour:"smooth"});
},100)
},[messages])


  return (
  <div className='px-4 flex-1 overflow-auto w-full '>
  {!loading &&
   messages.length>0 && 
  messages.map((message)=>(
 <div key={message._id}
 ref={lastMessagesRef}
    > 
     <Message 
    message={message}
/>
 </div>
  ))}
{loading &&  Message.length===0 && (
  <p className='text-center'>send a message to start the conversation</p>
)}

    </div>
  )
}

export default Messages




// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//     </div>
//   )
// }

// export default Messages