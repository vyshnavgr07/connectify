import React from 'react'
import {BiLogOut} from 'react-icons/bi';
import { useLogout } from '../../hooks/userLogout';
const LogoutButton = () => {
  const {loading,logOut}=useLogout()

  return (
    <div className='mt-auto'>
      {!loading?(
  <BiLogOut 
  className='w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 text-white cursor-pointer'
  onClick={logOut}
  />
      ):(
        <span className='loading loading-spinner'></span>
      )}
      
</div>
  )
}

export default LogoutButton