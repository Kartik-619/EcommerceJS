const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({});//we require an empty object as a destructor

const CartFetch=async(req,res)=>{
    try{  
        const cart=await prisma.cart.findMany({
            where:{userId},
                include:{
                productId:true,
                include: {
                images: true,
              },
        }
    });

 
        if(!cart){
            return res.status(404).json({success:false,message:'cart not found'});
        }
        res.json(cart)
    }catch(e){
        console.log(e);
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}
module.exports=CartFetch;