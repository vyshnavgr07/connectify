import React, { useState } from 'react'
import {SearchIcon} from 'lucide-react';
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const Search = () => {
	const [searched,setSearched]=useState("");
    const {setSelectedConversation}=useConversation()
	const {conversation}=useGetConversation()
	const handleSubmit=(e)=>{
   e.preventDefault();
   if(!searched){
	return
   }
   if(searched<3){
 return toast.error(`Search term be at least 3 characters long`)
   }

   let  conver=conversation.find((c)=>c.fullName.toLowerCase().includes(searched.toLocaleLowerCase()))
   if(conver){
	setSelectedConversation(conver)
	setSearched('')
   }else{
	toast.error('no user found')
   }
	}
  return (
<form    onSubmit={handleSubmit}
 className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				value={searched}
				onChange={(e)=>setSearched(e.target.value)}
			
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
         <SearchIcon/>
			</button>
		</form>
  )
}

export default Search





// import React from 'react'
// import {SearchIcon} from 'lucide-react';

// const Search = () => {
//   return (
// <form  className='flex items-center gap-2'>
// 			<input
// 				type='text'
// 				placeholder='Search…'
// 				className='input input-bordered rounded-full'
			
// 			/>
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// <SearchIcon/>
// 			</button>
// 		</form>
//   )
// }

// export default Search