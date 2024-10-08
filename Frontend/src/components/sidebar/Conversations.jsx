import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {
 const {loading,conversation,idx}= useGetConversation();
return (
    <div className='py-2 flex flex-col overflow-auto'>
{conversation?.map((con)=>(
  <Conversation
  key={con._id}
  conversation={con}
  lastIdx={idx === conversation.length - 1}
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
// <Conversation/>
// <Conversation/>
// <Conversation/>
// <Conversation/>
// <Conversation/>
//     </div>
//   )
// }

// export default Conversations