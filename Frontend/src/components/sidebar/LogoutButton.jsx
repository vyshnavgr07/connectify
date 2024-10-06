import React from 'react'
import {BiLogOut} from 'react-icons/bi';
import { useLogout } from '../../hooks/userLogout';
const LogoutButton = () => {
  const {loading,logOut}=useLogout()

  return (
    <div className='mt-auto'>
      {!loading?(
  <BiLogOut 
  className='w-16 h-6 text-white cursor-pointer'
  onClick={logOut}
  />
      ):(
        <span className='loading loading-spinner'></span>
      )}
      
</div>
  )
}

export default LogoutButton