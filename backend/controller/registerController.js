const {PrismaClient}=require('@prisma/client');
const prisma= new PrismaClient({});
const bcrypt=require('bcryptjs');

const RegisterController=async (req,res)=>{
    const {username,email,password}=req.body;
   
   
    if(!username || !email || !password){
        return res.status(400).json({
            success:false, 
            message:'Please enter all the fields'});
    }

   
   try{ 
    const existUser=await prisma.user.findFirst({
        where:{
            OR: [
                { username },
                { email }
            ]
        }
    });
    
    if(existUser){
        return res.status(409).json({
            success:false,
            message:'User already exists'});
    }

    const hashedPassword=await bcrypt.hash(password,10);

    const user=await prisma.user.create({
       data:{
            username,
            email,
            password:hashedPassword,
            role:'USER'}
    });
    return res.status(200).json({
        success:true,
        message:'Register successful',
        user:{id:user.id,
            username:user.username,
            email:user.email}
    })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}
module.exports=RegisterController;