import React from 'react'

const GenderCheckBox = ({register,errors}) => {
  return (
    <div className='flex'>
<div className='form-control'>
    <label className='label gap-2 cursor-pointer' >
        <span className='label-text'>Male</span>
        <input
            type='radio'
            className='checkbox border-slate-900'
            value='male'
          {...register('gender',{required:'choose a gender'})}
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
            {...register('gender',{required:'choose a gender'})}
        />
    </label>  

</div>
{errors.gender?<p className='text-red-500 text-sm'>{errors.gender.message}</p>:<p></p>}
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