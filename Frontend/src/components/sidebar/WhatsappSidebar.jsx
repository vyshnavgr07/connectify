import { useState } from 'react';
import { Menu, Phone, Star, Archive, Settings, User, MessageCircle } from 'lucide-react';
import LogoutButton from './LogoutButton';
import ProfileModal from '../modals/ProfileModal';

const WhatsappSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const menuItems = [
        { icon: <MessageCircle />, text: 'Chats' },
        { icon: <Phone />, text: 'Calls' },
        { icon: <Star />, text: 'Starred messages' },
        { icon: <Archive />, text: 'Archived chats' },
        { icon: <Settings />, text: 'Settings' },
        { icon: <User />, text: 'Profile' }
      ];

      const handleClick = (text) => {
        if (text === 'Profile') {
            setIsProfileOpen(true);
        }
    };

     
  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} h-full  border-r transition-all duration-300 flex flex-col`}>
    <div className="p-4 border-b flex items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="hover:bg-blue-500 text-white p-2 rounded-full">
        <Menu />
      </button>
    </div>
    
    <nav className="flex-1">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={()=>handleClick(item.text)}
          className="w-full flex items-center p-4 hover:bg-blue-500 transition-colors"
        >
          <span className="text-white">{item.icon}</span>
          {isOpen && (
            <span className="ml-4 text-white">{item.text}</span>
          )}
        </button>
      ))}
    </nav>
    <LogoutButton/>
    <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
  </div>
  )
}

export default WhatsappSidebar


