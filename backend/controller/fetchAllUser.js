const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fetchAllUser=async(req,res)=>{
    try{
        const users=await prisma.user.findMany({
            select:{
                username:true,
                email:true,
                role:true,
               orders:{ 
                id:true,
                status:true,
                totalAmount:true,
                select:{orderItems:{
                    select:{
                        id:true,
                        quantity:true,
                        price:true,
                        product:{
                            select:{
                                slug:true,
                                model:true,
                                basePrice:true
                            }
                        }
                    }
                },},},
               
            }
        });
        res.json(users);
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Failed to fetch all users"
        });
    }
}
module.exports=fetchAllUser;