const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addToCart = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.user.id || req.user.userId; // handle both
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID missing" });
    }

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
  } catch (error) {
    console.error("AddToCart Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = addToCart;
