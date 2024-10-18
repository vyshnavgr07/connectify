// import React, { useState } from "react";

// const OTPModal = ({ isOpen, onClose, onSubmit }) => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return;
//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//     // Move to next input field if input is valid
//     if (element.nextSibling && element.value) {
//       element.nextSibling.focus();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(otp.join(""));
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
//         isOpen ? "block" : "hidden"
//       }`}
//     >
//       <div className="bg-white rounded-lg p-8 w-80 shadow-lg">
//         <h2 className="text-xl font-semibold text-center mb-4">Enter OTP</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="flex justify-between mb-6">
//             {otp.map((data, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength="1"
//                 value={data}
//                 onChange={(e) => handleChange(e.target, index)}
//                 className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 focus:border-blue-500 rounded-md focus:outline-none"
//                 onFocus={(e) => e.target.select()}
//               />
//             ))}
//           </div>
//           <div className="flex justify-center space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OTPModal;
