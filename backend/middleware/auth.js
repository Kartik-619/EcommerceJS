//middleware created to verify routes after login
const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    //extract from token's bearer the payload
    try{const token=req.cookies.token;
    if(!token){
        console.log('jwt token not found');
        return res.status(401).json({message:"the token is not found"});
    }
  
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
module.exports = verifyToken;
    