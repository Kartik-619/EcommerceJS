const {PrismaClient}=require('@prisma/client');
const prisma= new PrismaClient;
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const LoginController=async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){

        return res.status(400).json({
            success:false, 
            message:'Please enter all the fields'});
    }


   try{ 
    const user=await prisma.user.findUnique({
        where:{username}
    });
 
    const isMatch=await bcrypt.compare(password,user.password);

    if(!user){
        console.log('the user is not signed up');
        return res.status.status(404).json({
            success:false,
            message:'user not found'
        });
    }

    if(!isMatch){
        console.log('problem with password hashing');
        return res.status(401).json({
            success:false,
            message:'the password is invalid'
        })

    }
    return res.status(200).json({
        success:true,
        message:'Login successful',
        user:{id:user.id,
            username:user.username,
            email:user.email}
    })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}
module.exports=LoginController;