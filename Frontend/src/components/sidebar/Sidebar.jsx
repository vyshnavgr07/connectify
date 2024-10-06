import React from 'react'
import Search from './Search'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='overflow-scroll'>
        <Search/>
        <div className='divider px-3 '></div>
        <Conversations/>
        <LogoutButton/>
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