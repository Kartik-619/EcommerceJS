

const requireRole=(role)=>{

    return (req,res,next)=>{
        try{
            if (!req.user) {
                return res.status(401).json({ success: false, message: "Unauthorized: No user payload found" });
              }
          
            if(req.user.role!==role){
                return res.status(403).json({success:false,message:`Only the ${role} is allowed to access this service `});
            }
       
            
            next();
        }catch(err){
            console.log(err);
            return res.status(401).json({
                success:false, 
                message: "Unauthorized: Invalid User" 
            });
        }
    }
    //extract from token's bearer the payload
  
};
module.exports = requireRole;
    