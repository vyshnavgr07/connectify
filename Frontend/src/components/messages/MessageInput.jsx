import React from 'react'
import {BsSend}  from "react-icons/bs"
import {useForm}   from 'react-hook-form';
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {
  const {register,handleSubmit,formState:{errors},reset} =useForm()
  const {loading,sendMessage}=useSendMessage()
function onSubmit(data){
  if(data.message){
 sendMessage(data)
  }
reset()
}
return (
<form className='px-4 my-3' onSubmit={handleSubmit(onSubmit)}>
<div className='w-full relative'>
<input 
type='text' 
className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-600 text-white'
placeholder='send a message'
{...register('message')}
/>

<button type='submit'
className='absolute inset-y-0 end-0 flext items-center pe-3'   disabled={loading}>

<BsSend className=''/>

</button>
</div>

    </form>
  )
}

export default MessageInput





// import React from 'react'
// import {BsSend}  from "react-icons/bs"
// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
// <div className='w-full'>
// <input 
// type='text' 
// className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-600 text-white'
// placeholder='send a message'
// />

// <button type='submit'
// className='absolute inset-y-0 end-0 flext items-center pe-3'>
// <BsSend/>
// </button>
// </div>

//     </form>
//   )
// }

// export default MessageInput