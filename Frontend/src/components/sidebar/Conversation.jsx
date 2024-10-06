import React from 'react'

const Conversation = () => {
  return (
    <>  
    <div className='flex gap-2 items-center hover:bg-slate-500 rounded p-2 py-1 cursor-pointer'>
<div className='avatar online'>
<div className='w-12 rounded-full'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s' alt='user avatar'/>
</div>
</div>

<div className='flex flex-col flex-1'>
<div className=' flex gap-3 justify-between '>
    <p className='font-bold text-gray-200 '>vyshnav</p>
    <span className='text-xl'>😊</span>
</div>
</div>
</div>

<div className='divider my-0 py-0 h-1 '>

</div>
</>
  )
}

export default Conversation






// import React from 'react'

// const Conversation = () => {
//   return (
//     <>  
//     <div className='flex gap-2 items-center hover:bg-slate-500 rounded p-2 py-1 cursor-pointer'>
// <div className='avatar online'>
// <div className='w-12 rounded-full'>
//     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s' alt='user avatar'/>
// </div>
// </div>

// <div className='flex flex-col flex-1'>
// <div className=' flex gap-3 justify-between '>
//     <p className='font-bold text-gray-200 '>vyshnav</p>
//     <span className='text-xl'>😊</span>
// </div>
// </div>
// </div>

// <div className='divider my-0 py-0 h-1 '>

// </div>
// </>
//   )
// }

// export default Conversation