const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({});//we require an empty object as a destructor

const OrderSummary = async (req, res) => {
    let totalPrice=0;
    let subtotal=0;
    try {
      console.log("USER FROM TOKEN:", req.user);
  
      const userId = req.user.id;
  
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
        },
      });


      const cartItems = await prisma.cart.findMany({
        where: {
          userId,
        },
        include: {
          product: true,
        },
      });

      if(cartItems.length===0){
        return res.status(400).json({message:'The cart is empty '});
      }
      //cartItem is an array and for each user a new one is created so we are mapping via it

      cartItems.forEach(item=>{
        subtotal+=item.product.basePrice*item.quantity;
      })
      const tax=Math.round(subtotal*0.18);
      totalPrice=subtotal+tax;


      return res.json({
        success:true,
        user,
        summary:{
          subtotal,
          tax,       
          totalAmount,
        },
        items: cartItems,
       
      });
    } catch (err) {
      console.error("Checkout ERROR:", err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  
  module.exports = OrderSummary;
  