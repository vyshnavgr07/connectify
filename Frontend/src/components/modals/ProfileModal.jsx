import React, { useEffect, useState } from 'react';
import { X, Edit3, Save } from 'lucide-react'; // Import Save icon
import { useAuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import useUpdateProfile from '../../hooks/useUpdateProfile';
const ProfileModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;
const { authUser } = useAuthContext();
const {loading,update} =useUpdateProfile()
const fileInputRef = React.useRef(null);
  const [isEditingFullName, setIsEditingFullName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [profilePic,setProfilePic]=useState(null)
  const [image,setImage]=useState(null)
  useEffect(() => {
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.fullName)}&uppercase=true&background=random&font-size=0.33&length=2&bold=true`;
    setProfilePic(authUser?.profilepicture || avatarUrl);
  }, [authUser]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file)
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: authUser.fullName,
      email: authUser.email,
      about: "Trust the process", 
    },
  });

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };


  const onSubmit = async(data) => {
  const updatedData = {...data};
  const response=await update(updatedData)
  console.log(response,'responsee')
  onClose();    
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-4">
         
        <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden cursor-pointer" onClick={handleImageClick}>
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mt-2 hidden" // Hide the input
        ref={fileInputRef} // Attach the ref
      />
    </div>


        
          <div className="w-full relative">
            <input
              className={`text-xl font-semibold border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-2 py-1 w-full`}
              {...register('fullName', { required: 'Full name is required' })}
              disabled={!isEditingFullName}  
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            <button
              type="button"
              onClick={() => {
                if (isEditingFullName) {
                
                  onSubmit({ fullName: document.getElementsByName('fullName')[0].value });
                }
                setIsEditingFullName(!isEditingFullName); 
              }}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              {isEditingFullName ? <Save size={20} /> : <Edit3 size={20} />}
            </button>
          </div>

        
          <div className="w-full relative">
            <h3 className="text-sm text-gray-500">About</h3>
            <textarea
              className={`w-full border ${errors.about ? 'border-red-500' : 'border-gray-300'} rounded-lg px-2 py-1`}
              {...register('about')}
              disabled={!isEditingAbout} 
            />
            {errors.about && <p className="text-red-500 text-sm">{errors.about.message}</p>}
            <button
              type="button"
              onClick={() => {
                if (isEditingAbout) {
                  onSubmit({ about: document.getElementsByName('about')[0].value });
                }
                setIsEditingAbout(!isEditingAbout); 
              }}
              className="absolute right-2 top-6 text-gray-500 hover:text-gray-700"
            >
              {isEditingAbout ? <Save size={20} /> : <Edit3 size={20} />}
            </button>
          </div>

         
          <div className="w-full relative">
            <h3 className="text-sm text-gray-500">Email</h3>
            <input
              type="email"
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-2 py-1`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Enter a valid email address',
                },
              })}
              disabled={!isEditingEmail}  
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <button
              type="button"
              onClick={() => {
                if (isEditingEmail) {
                  onSubmit({ email: document.getElementsByName('email')[0].value });
                }
                setIsEditingEmail(!isEditingEmail);
              }}
              className="absolute right-2 top-6 text-gray-500 hover:text-gray-700"
            >
              {isEditingEmail ? <Save size={20} /> : <Edit3 size={20} />}
            </button>
          </div>

        
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
          >
            Save All
          </button>
        </form>

       
        <button
          onClick={onClose}
          className="w-full mt-4 py-2 text-red-600 hover:bg-red-50 rounded"
        >
          Log out
        </button>

        <p className="text-sm text-gray-500 text-center">
          Chat history on this computer will be cleared when you log out.
        </p>
      </div>
    </div>
  );
};

export default ProfileModal;
