const {PrismaClient}=require('@prisma/client');
const prisma= new PrismaClient;
const LoginController=async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        return res.status(400).json({success:false, message:'Please enter all the fields'});
    }
   try{ const user=await prisma.user.findUnique({
        where:{username}
    });

    if(!user){
        return res.status.status(500).json({
            success:false,
            message:'user not found'
        });
    }
    return res.status(200).json({
        success:true,
        message:'Login successful',
        user:{id:user.id,
            username:user.username,
            email:user.email}
    })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}
module.export=LoginController;