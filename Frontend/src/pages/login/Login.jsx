import React from 'react';
import { User, Lock, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
 const {loading,login}=useLogin()
  const onSubmit=async(data)=>{
  await login(data)
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
      <div className='w-full max-w-md p-8 rounded-xl shadow-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'>
        <h1 className='text-4xl font-bold text-center text-white mb-8'>
          Welcome to <span className='text-yellow-300'>Connectify</span>
        </h1>

        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='relative'>
            <label className='text-sm font-medium text-gray-200 block mb-2'>
              Username
            </label>
            <div className='flex items-center'>
              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
              <input
                type='text'
                placeholder='Enter username'
                className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-20 text-white placeholder-gray-300'
                {...register('username',{required:"username required"})}
              />
              {errors.username?<p className='text-4xl text-red-700'>{errors.username.message}</p>:<p></p>}
            </div>
          </div>

          <div className='relative'>
            <label className='text-sm font-medium text-gray-200 block mb-2'>
              Password
            </label>
            <div className='flex items-center'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
              <input
                type='password'
                placeholder='Enter Password'
                className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-20 text-white placeholder-gray-300'
                {...register('password',{required:"Password required"})}
           />
            {errors.password?<p className='text-4xl text-red-700'>{errors.password.message}</p>:<p></p>}
            </div>
          </div>

          <div>
            
            <button
            type='submit'
             className='w-full px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center'>
              <LogIn className='mr-2' size={18} />
              Sign In
            </button>
          </div>
        </form>

        <p className='mt-6 text-sm text-center text-gray-300'>
          Don't have an account?{' '}
          <Link to={'/signup'} className='text-yellow-300 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;





// import React from 'react';
// import { User, Lock, LogIn } from 'lucide-react';

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen '>
//       <div className='w-full max-w-md p-8 rounded-xl shadow-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'>
//         <h1 className='text-4xl font-bold text-center text-white mb-8'>
//           Welcome to <span className='text-yellow-300'>Connectify</span>
//         </h1>

//         <form className='space-y-6'>
//           <div className='relative'>
//             <label className='text-sm font-medium text-gray-200 block mb-2'>
//               Username
//             </label>
//             <div className='flex items-center'>
//               <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
//               <input
//                 type='text'
//                 placeholder='Enter username'
//                 className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-20 text-white placeholder-gray-300'
//               />
//             </div>
//           </div>

//           <div className='relative'>
//             <label className='text-sm font-medium text-gray-200 block mb-2'>
//               Password
//             </label>
//             <div className='flex items-center'>
//               <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
//               <input
//                 type='password'
//                 placeholder='Enter Password'
//                 className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-20 text-white placeholder-gray-300'
//               />
//             </div>
//           </div>

//           <div>
//             <button className='w-full px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center'>
//               <LogIn className='mr-2' size={18} />
//               Sign In
//             </button>
//           </div>
//         </form>

//         <p className='mt-6 text-sm text-center text-gray-300'>
//           Don't have an account?{' '}
//           <a href='#' className='text-yellow-300 hover:underline'>
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;