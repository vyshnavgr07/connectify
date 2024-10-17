const OtpSchema=require('../../models/otpSchema')
const User=require('../../models/userSchema')

const otpVerify=async(email,otp)=>{
    const otpRecord = await OtpSchema.findOne({email});
if (!otpRecord) {
         return {status:400,message: 'OTP not found for this email.'}
     }
    //  const expiresAt = new Date(otpRecord.expiresAt);
    //  const currentTime = Date.now();  // Current time in milliseconds
 
    //  console.log('Expires At:', expiresAt);
    //  console.log('Current Time:', new Date(currentTime));
 
    //  // Compare dates
    //  if (expiresAt< currentTime) {
    //      return { status: 400, message: 'OTP has expired.' };
    //  }
  
     if (otpRecord.otp !== otp) {
         return {status:400,message: 'Invalid OTP.'};
     }
      
     await User.updateOne({email:email},{$set:{verified:true}})

     await OtpSchema.deleteOne({ email });
      
     return {status:200,message: 'OTP verified successfully.'};
}


module.exports=otpVerify;