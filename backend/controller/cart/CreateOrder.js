const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({});//we require an empty object as a destructor

const CreateOrder=async(req,res)=>{
    try{
        const userId = req.user.id;
  
        const user = await prisma.user.findUnique({
          where: { id: userId },
          select: {
            id: true,
            username: true,
            email: true,
          },
        }); 

        if(!user){
            return res.status(400).json({
                success:false,
                message:"The user doesn't exist"
            });
        }

        const cartItems = await prisma.cart.findMany({
            where: {
              userId,
            },
            include: {
              product: {
              },
            },
          });

          if(cartItems.length===0){
            return res.status(400).json({message:'The cart is empty '});
          }
          cartItems.forEach(item=>{
            subtotal+=item.product.basePrice*item.quantity;
          })
          const tax=Math.round(subtotal*0.18);
          totalPrice=subtotal+tax;
    

        return res.json({

        })
    }catch(e){
        console.log('Create Order Error',e);
    }
}