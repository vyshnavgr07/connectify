import React, { useState } from 'react'
import Search from './Search'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import WhatsappSidebar from './WhatsappSidebar'
import {User} from 'lucide-react';
import ProfileModal from '../modals/ProfileModal'
const Sidebar = () => {
const [isProfileOpen, setIsProfileOpen] = useState(false);


console.log(isProfileOpen,'fooo')
  return (
<div className="flex flex-col w-full sm:w-64 md:w-[400px] h-full mt-3 border-r overflow-y-auto">
  <div className="flex-grow mt-2">
    <Search />
    <div className="divider px-3"></div>
    <Conversations />
  </div>
  <div className="mt-auto flex w-full justify-between p-3">
    <User
      className="w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 text-white cursor-pointer"
      onClick={() => setIsProfileOpen(true)}
    />
    <LogoutButton />
  </div>

  <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
</div>

 )
}

export default Sidebar






// import React from 'react'
// import Search from './Search'
// import Conversations from '../Conversations'

// const Sidebar = () => {
//   return (
//     <div>
//         <Search/>
//         <div className='divider px-3 '></div>
//         <Conversations/>
//     </div>
//   )
// }

// export default Sidebar