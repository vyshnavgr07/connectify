import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {
 const {loading,conversation}= useGetConversation();
 console.log(conversation,"conversatinnnn")
  return (
    <div className='py-2 flex flex-col overflow-auto'>
<Conversation/>
<Conversation/>
<Conversation/>
<Conversation/>
<Conversation/>
<Conversation/>
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