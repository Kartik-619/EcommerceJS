const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const AddToCart = async (req, res) => {
  try {
    
    const userId = req.user.userId; // from JWT middleware
    const { productId, quantity=1} = req.body;
    //product id from client

    //upsert is used to do both update or insert
    const cartItem = await prisma.cart.upsert({
      where: {
        userId_productId_variantId: {
          userId,
          productId,
        },
      },
      //if product already exists we now increment its quantity
      update: {
        quantity: { increment: quantity },
      },
      //else we add it from the cart
      create: {
        userId,
        productId,
        quantity: 1,
      },
    });

    return res.json({
      success: true,
      message: "Item added to cart",
      cartItem,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to add to cart",
    });
  }
};

module.exports = AddToCart;
