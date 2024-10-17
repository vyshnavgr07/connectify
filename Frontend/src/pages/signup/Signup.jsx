import React from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useSignup from '../../hooks/useSignup';
const Signup = () => {
  const { register, handleSubmit } = useForm();

const {loading,signupp}=useSignup()
const onSubmit = async(data) => {
  sessionStorage.setItem('user', JSON.stringify(data));
  console.log('success')
   await signupp(data)

  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mt-10 mx-auto'>
      <div className='w-[450px] p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              className='w-full input input-bordered h-10'
              {...register('fullName')}
            />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='johndoe'
              className='w-full input input-bordered h-10'
              {...register('username')}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              {...register('password')}
            />
          </div>

          <GenderCheckBox  register={register}/>

          <Link
            to={'/login'}
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Already have an account?
          </Link>

          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;






// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//   return (
// <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form >
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='John Doe'
// 							className='w-full input input-bordered  h-10'
					
// 						/>
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='johndoe'
// 							className='w-full input input-bordered h-10'
						
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
						
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
						
// 						/>
// 					</div>

// 					<GenderCheckBox  />

// 					{/* <Link
// 						to={"/login"}
// 						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
// 						href='#'
// 					>
// 						Already have an account?
// 					</Link> */}

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700' >
// 							Signu up
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
//   )
// }

// export default Signup









// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//   return (
// <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form >
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='John Doe'
// 							className='w-full input input-bordered  h-10'
					
// 						/>
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='johndoe'
// 							className='w-full input input-bordered h-10'
						
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
						
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
						
// 						/>
// 					</div>

// 					<GenderCheckBox  />

// 					{/* <Link
// 						to={"/login"}
// 						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
// 						href='#'
// 					>
// 						Already have an account?
// 					</Link> */}

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700' >
// 							Signu up
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
//   )
// }

// export default Signup