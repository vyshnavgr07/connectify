import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useGetMessages from '../../hooks/useGetMessages'
import useConversation from '../../zustand/useConversation'



const MessageContainer = () => {
const {loading,messages}=useGetMessages();
const { selectedConversation, setSelectedConversation } = useConversation();


useEffect(()=>{
return ()=>setSelectedConversation(null);
},[setSelectedConversation])

  return (
    <div className='overflow-scroll mt-3 w-full  md:min-w-[450px] flex flex-col'>
    {!selectedConversation?(<NochatContainer/>):(
            <>
            <div className='bg-slate-500 px-4 py-2 mb-2'>
           <span className='labe-text'>To:</span>
           <span className='text-gray-900 font-bold'>{selectedConversation?.fullName}</span>
            </div>
            <Messages/>
            <MessageInput/>
            </>
    )}
    </div>
  )
}

export default MessageContainer



const NochatContainer = () => {
    return (
      <div className='flex items-center justify-center w-full h-full'>
   <div className='px-4 text-center sm:text-xl text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
  <p>Welcome 💕user</p>
  <p>select a chat to start messaging</p>
      </div>
      </div>
    )
  }
  







// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//     <>
//     {/* header */}

//     <div className='bg-slate-500 px-4 py-2 mb-2'>
//    <span className='labe-text'>To:</span>
//    <span className='text-gray-900 font-bold'>rahul</span>
//     </div>


//     <Messages/>
//     <MessageInput/>
//     </>
//     </div>
//   )
// }

// export default MessageContainer