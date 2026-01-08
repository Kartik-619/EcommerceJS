const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const UpdateCart=async(req,res)=>{
const userId=req.user.id;
try{
    const user=await prisma.user.findUnique({
        where:{id:userId},
        select: {
            id: true,
            username: true,
            email: true,
          },
        });
    
        if(!user){
            return res.status(400).json({success:false,message:"The user not available"});
        }


        //change the order status
        const order=await prisma.order.update({
            where:{userId},
          data: {status:'complete'},
        })


        //clear the cart
        await prisma.cart.deleteMany({
            where: { userId },
          });
         
        return res.status(201).json({
            success: true,
            message: "Order created successfully",
            order,
          });
}catch(err){
        console.error('updating the order error :',err);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error while updating the the cart"
        });
}
}

module.exports=UpdateCart;
