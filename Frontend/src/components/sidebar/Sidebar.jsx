import React from 'react'
import Search from './Search'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import WhatsappSidebar from './WhatsappSidebar'

const Sidebar = () => {
  return (
    <div className='overflow-scroll flex w-[600px] mt-3 border-r'>
      <div>
<WhatsappSidebar/>
      </div>
      <div>
      <Search/>
        <div className='divider px-3 '></div>
        <Conversations/>
       
        </div>
    
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