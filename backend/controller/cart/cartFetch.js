const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({});//we require an empty object as a destructor

const fetchCart = async (req, res) => {
    try {
      console.log("USER FROM TOKEN:", req.user);
  
      const userId = req.user.id;
  
      const cartItems = await prisma.cart.findMany({
        where: {
          userId,
        },
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      });
  
      return res.json({
        success: true,
        cart: cartItems,
      });
    } catch (err) {
      console.error("FETCH CART ERROR:", err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  
  module.exports = fetchCart;
  