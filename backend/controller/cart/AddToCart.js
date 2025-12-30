const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addToCart = async (req, res) => {
    const userId = req.user.userId;
    const { productId } = req.body;
  
    const existing = await prisma.cart.findFirst({
      where: { userId, productId },
    });
  
    if (existing) {
      await prisma.cart.update({
        where: { id: existing.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      await prisma.cart.create({
        data: { userId, productId, quantity: 1 },
      });
    }
  
    res.json({ success: true });
  };
  

module.exports = AddToCart;
