const axios = require("axios");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getUroPayHeaders = require("../../utils/uropayAuth");

const GenerateOrder = async (req, res) => {
    const userId = req.userId;
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { username: true, email: true }
        })

        if (!user) {
            return res.status(405).json({ success: false, message: 'User not found' });
        }

        const cartItems = await prisma.cart.findMany({
            where: { userId },
            include: { product: true },
        });

        if (cartItems.length === 0) {
            return res.status(401).json({ success: false, message: 'The cart is empty!!!' });
        }


        let subtotal = 0;
        cartItems.forEach(item => {
            subtotal += item.product.basePrice * item.quantity;
        });

        const tax = Math.round(subtotal * 0.18);
        const totalAmount = subtotal + tax;

        //create order
        const order = await prisma.order.create({
            data: {
              userId,
              tax,
              totalAmount,
              status: "pending",
              orderItems: {
                create: cartItems.map(item => ({
                  productId: item.productId,
                  quantity: item.quantity,
                  price: item.product.basePrice,
                })),
              },
            },
          });


    } catch (e) {
        console.log(e)
    }
}