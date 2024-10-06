import React from 'react'
import {SearchIcon} from 'lucide-react';

const Search = () => {
  return (
<form  className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
			
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