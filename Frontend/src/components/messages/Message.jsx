import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
         <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
           <img
           alt='Tailwind css chat bubble component'
           src='https://esribelux.com/wp-content/uploads/2024/03/user-types-tls-professional-plus-2.jpg'
           />
       </div>
         </div>

         <div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi what is up</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center '>12:42</div>
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