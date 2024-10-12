import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { useSocketContext } from '../../context/SocketContext';
import { useAuthContext } from '../../context/AuthContext';

const Conversations = () => {
 const {loading,conversation,idx}= useGetConversation();
 const {authUser}=useAuthContext()
const excludedUser=conversation.filter((x)=>x._id!=authUser._id)
 
return (
<div className='py-2 flex flex-col overflow-auto'>
{excludedUser?.map((con)=>(
  <Conversation
  key={con._id}
  conversation={con}  lastIdx={idx === conversation.length - 1}
   />
))}
    </div>
  )
}

export default Conversations




// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
// <Conversation/>
//<Conversation/>
// <Conversation/>
// <Conversation/>
// <Conversation/>
// <Conversation/>
//     </div>
//   )
// }

// export default Conversations5        