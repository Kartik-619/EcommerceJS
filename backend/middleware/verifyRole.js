

const verifyAdminRole=(req,res,next)=>{
    //extract from token's bearer the payload
    try{
        if (!req.user) {
            return res.status(401).json({ success: false, message: "Unauthorized: No user payload found" });
          }
      
        if(req.user.role!=="ADMIN"){
            return res.status(403).json({success:false,message:"Only the Admin is allowed to access the route"});
        }
   
        
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({ message: "Unauthorized: Invalid User" });
    }
};
module.exports = verifyAdminRole;
    