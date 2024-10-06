import React from 'react'

const GenderCheckBox = ({register}) => {
  return (
    <div className='flex'>
<div className='form-control'>
    <label className='label gap-2 cursor-pointer' >
        <span className='label-text'>Male</span>
        <input
            type='radio'
            className='checkbox border-slate-900'
            value='male'
            {...register('gender')}
        />
    </label>
</div>
<div className='form-control'>
    <label className='label gap-2 cursor-pointer'>
        <span className='label-text'>Female</span>
        <input
             type='radio'
            className='checkbox border-slate-900'
            value='female'
            {...register('gender')}
        />
    </label>  
</div>
</div>
  )
}

export default GenderCheckBox




// import React from 'react'
// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
// <div className='form-control'>
//     <label className='label gap-2 cursor-pointer' >
//         <span className='label-text'>Male</span>
//         <input
//             type='checkbox'
//             className='checkbox border-slate-900'
          
//         />
//     </label>
// </div>
// <div className='form-control'>
//     <label className='label gap-2 cursor-pointer'>
//         <span className='label-text'>Female</span>
//         <input
//             type='checkbox'
//             className='checkbox border-slate-900'
         
//         />
//     </label>
// </div>
// </div>
//   )
// }

// export default GenderCheckBox