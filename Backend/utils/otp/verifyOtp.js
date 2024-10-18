import  OtpSchema from '../../modal/otpSchema.js'


const otpVerify=async(email,otp)=>{
    const otpRecord = await OtpSchema.findOne({email});
if (!otpRecord) {
         return {status:400,message: 'OTP not found for this email.'}
     }
    if (otpRecord.otp !== otp) {
         return {status:400,message: 'Invalid OTP.'};
     }
      
     await OtpSchema.deleteOne({ email });
      
     return {status:200,message: 'OTP verified successfully.'};
}


export default otpVerify;