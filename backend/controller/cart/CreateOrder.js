const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { paymentIntentId } = req.body;

    if (!paymentIntentId) {
      return res.status(400).json({
        success: false,
        message: "PaymentIntent ID is required",
      });
    }

    // 1️ Fetch cart items
    const cartItems = await prisma.cart.findMany({
      where: { userId },
      include: {
        product: true,
      },
    });

    if (cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // 2️ Calculate totals
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.product.basePrice * item.quantity;
    });

    const tax = Math.round(subtotal * 0.18);
    const totalAmount = subtotal + tax;

    // 3️ Create order
    const order = await prisma.order.create({
      data: {
        userId,
        tax,
        totalAmount,
        status: "pending",
        paymentIntent: paymentIntentId,
        orderItems: {
          create: cartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.basePrice,
          })),
        },
      },
      include: {
        orderItems: true,
      },
    });

    // 4️ Clear cart
   

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });

  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = createOrder;
