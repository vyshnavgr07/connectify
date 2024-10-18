import  mongoose   from 'mongoose';

const otpSchema=mongoose.Schema({
    userId:String,
    email:String,
    otp:String,
    createdAt:Date,
    expiresAt:Date

});

const Otp=mongoose.model('Otp',otpSchema)


export default Otp;