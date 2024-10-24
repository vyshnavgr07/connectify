import React, { useEffect, useState } from 'react';
import { X, Edit3, Save } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import useUpdateProfile from '../../hooks/useUpdateProfile';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const { authUser, setAuthUser } = useAuthContext();
  const { loading, update } = useUpdateProfile();
  const fileInputRef = React.useRef(null);
  const [isEditingFullName, setIsEditingFullName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.fullName)}&uppercase=true&background=random&font-size=0.33&length=2&bold=true`;

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: authUser.fullName,
      email: authUser.email,
      status: authUser.status,
    },
  });

  const onSubmit = async(data) => {
    const updatedData = {...data};
    await update(updatedData);
    onClose();    
  };

  return (
    <div className="fixed z-20 inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="bg-gray-300 h-[600px] rounded-xl w-full max-w-md p-8 relative shadow-2xl transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 ring-4 ring-blue-100">
              <img
                src={avatarUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full space-y-6">
            <div className="relative">
              <input
                className={`text-2xl font-bold text-gray-800 border-b-2 ${
                  errors.fullName ? 'border-red-500' : isEditingFullName ? 'border-blue-500' : 'border-transparent'
                } rounded px-3 py-2 w-full focus:outline-none transition-colors bg-gray-50`}
                {...register('fullName', { required: 'Full name is required' })}
                disabled={!isEditingFullName}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              <button
                type="button"
                onClick={() => {
                  if (isEditingFullName) {
                    onSubmit({ fullName: document.getElementsByName('fullName')[0].value });
                  }
                  setIsEditingFullName(!isEditingFullName);
                }}
                className="absolute right-2 top-3 text-gray-400 hover:text-blue-500 transition-colors"
              >
                {isEditingFullName ? <Save size={20} /> : <Edit3 size={20} />}
              </button>
            </div>

            <div className="relative">
              <h3 className="text-sm font-medium text-gray-600 mb-1">About</h3>
              <textarea
                className={`w-full border-2 ${
                  errors.status ? 'border-red-500' : isEditingAbout ? 'border-blue-500' : 'border-gray-200'
                } rounded-lg px-3 py-2 focus:outline-none transition-colors resize-none min-h-[100px] bg-gray-50`}
                {...register('status')}
                disabled={!isEditingAbout}
              />
              {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
              <button
                type="button"
                onClick={() => {
                  if (isEditingAbout) {
                    onSubmit({ status: document.getElementsByName('status')[0].value });
                  }
                  setIsEditingAbout(!isEditingAbout);
                }}
                className="absolute right-2 top-8 text-gray-400 hover:text-blue-500 transition-colors"
              >
                {isEditingAbout ? <Save size={20} /> : <Edit3 size={20} />}
              </button>
            </div>

            <div className="relative">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Email</h3>
              <input
                type="email"
                className={`w-full border-2 ${
                  errors.email ? 'border-red-500' : isEditingEmail ? 'border-blue-500' : 'border-gray-200'
                } rounded-lg px-3 py-2 focus:outline-none transition-colors bg-gray-50`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Enter a valid email address',
                  },
                })}
                disabled={!isEditingEmail}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
             </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save All Changes'}
          </button>
        </form>
         </div>
    </div>
  );
};

export default ProfileModal;























// import React, { useEffect, useState } from 'react';
// import { X, Edit3, Save } from 'lucide-react'; // Import Save icon
// import { useAuthContext } from '../../context/AuthContext';
// import { useForm } from 'react-hook-form';
// import useUpdateProfile from '../../hooks/useUpdateProfile';
// const ProfileModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
// const { authUser,setAuthUser } = useAuthContext();
// const {loading,update} =useUpdateProfile()
// const fileInputRef = React.useRef(null);
//   const [isEditingFullName, setIsEditingFullName] = useState(false);
//   const [isEditingEmail, setIsEditingEmail] = useState(false);
//   const [isEditingAbout, setIsEditingAbout] = useState(false);

//   const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.fullName)}&uppercase=true&background=random&font-size=0.33&length=2&bold=true`;
  



//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       fullName: authUser.fullName,
//       email: authUser.email,
//       status:authUser.status, 
//     },
//   });



// const onSubmit = async(data) => {
// const updatedData = {...data};
// await update(updatedData)
// onClose();    
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={20} />
//         </button>

//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-4">
         
//         <div className="flex flex-col items-center">
//       <div className="w-24 h-24 rounded-full overflow-hidden cursor-pointer">
//         <img
//           src={avatarUrl}
//           alt="Profile"
//           className="w-full h-full object-cover"
//         />
//       </div>

//      </div>


        
//           <div className="w-full relative">
//             <input
//               className={`text-xl font-semibold border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-2 py-1 w-full`}
//               {...register('fullName', { required: 'Full name is required' })}
//               disabled={!isEditingFullName}  
//             />
//             {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
//             <button
//               type="button"
//               onClick={() => {
//                 if (isEditingFullName) {
                
//                   onSubmit({ fullName: document.getElementsByName('fullName')[0].value });
//                 }
//                 setIsEditingFullName(!isEditingFullName); 
//               }}
//               className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
//             >
//               {isEditingFullName ? <Save size={20} /> : <Edit3 size={20} />}
//             </button>
//           </div>

        
//           <div className="w-full relative">
//             <h3 className="text-sm text-gray-500">Abou</h3>
//             <textarea
//               className={`w-full border ${errors.about ? 'border-red-500' : 'border-gray-300'} rounded-lg px-2 py-1`}
//               {...register('status')}
//               disabled={!isEditingAbout} 
//             />
//             {errors.about && <p className="text-red-500 text-sm">{errors.about.message}</p>}
//             <button
//               type="button"
//               onClick={() => {
//                 if (isEditingAbout) {
//                   onSubmit({ about: document.getElementsByName('about')[0].value });
//                 }
//                 setIsEditingAbout(!isEditingAbout); 
//               }}
//               className="absolute right-2 top-6 text-gray-500 hover:text-gray-700"
//             >
//               {isEditingAbout ? <Save size={20} /> : <Edit3 size={20} />}
//             </button>
//           </div>

         
//           <div className="w-full relative">
//             <h3 className="text-sm text-gray-500">Email</h3>
//             <input
//               type="email"
//               className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-2 py-1`}
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                   message: 'Enter a valid email address',
//                 },
//               })}
//               disabled={!isEditingEmail}  
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//             <button
//               type="button"
//               onClick={() => {
//                 if (isEditingEmail) {
//                   onSubmit({ email: document.getElementsByName('email')[0].value });
//                 }
//                 setIsEditingEmail(!isEditingEmail);
//               }}
//               className="absolute right-2 top-6 text-gray-500 hover:text-gray-700"
//             >
//               {isEditingEmail ? <Save size={20} /> : <Edit3 size={20} />}
//             </button>
//           </div>

        
//           <button
//             type="submit"
//             className="w-full mt-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
//           >
//             Save All
//           </button>
//         </form>

       
//         <button
//           onClick={onClose}
//           className="w-full mt-4 py-2 text-red-600 hover:bg-red-50 rounded"
//         >
//           Log out
//         </button>

//         <p className="text-sm text-gray-500 text-center">
//           Chat history on this computer will be cleared when you log out.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;
