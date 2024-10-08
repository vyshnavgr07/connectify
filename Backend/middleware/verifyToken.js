import  jwt    from  'jsonwebtoken'


const verifyToken=async(req,res,next)=>{
    const authHeader=req.headers.authorization;

if(authHeader===undefined){
     return   res.status(401).json({
            status:'failed',
            message:'no token provided'  
        })
    }
const token=authHeader.split(" ")[1]


    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
     if(err){
        console.log(err,"error")
      return  res.status(401).json({
            status:'failed', 
            message:'token not provoded'
        })
     }else{
        req.user=decoded;
        next()
     }
    })
    
    }


export default verifyToken   

































// import jwt from 'jsonwebtoken';
// import User from '../modal/userModal.js';



// const verifyToken=async(req,res,next)=>{
// try {
//     const token=req.cookies.jwt;
//     if(!token){
//         return res.status(401).json({error:'Unauthorized -- No Token Provided'})
//     }

//     const decoded=jwt.verify(token,process.env.JWT_SECRET);
//     if(!decoded){
//         return res.status(401).json({error:'Unauthorized -- Invalid Token '})

//     }

//      const user=await User.findById(decoded.userId).select("-password");

//      if(!user){
//         return res.status(401).json({error:'Unauthorized -- User not found '})
// }

// req.user=user
// next()

// } catch (error) {
//     console.log(error,"err in verify token")
//     return res.status(500).json({
//         error:"internal server error"
//     })
// }
// }

// export default verifyToken;






