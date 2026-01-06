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

          const response = await axios.post(
            `${process.env.UROPAY_API_URL}/order/generate`,
            {
              vpa: "shopname@bicici",          // merchant VPA
              vpaName: "Ecomm Kartik",
              amount: totalAmount ,   // paise
              merchantOrderId: order.id,
              customerName: user.username,
              customerEmail: user.email,
              transactionNote: `Order ${order.id}`,
            }, { headers: getUroPayHeaders() }
        );
        //save uropay order id
        await prisma.order.update({
            where: { id: order.id },
            data: {
              paymentIntent: response.data.data.uroPayOrderId,
            },
          });
      
          res.json({
            qrCode: response.data.data.qrCode,
            upiString: response.data.data.upiString,
            uroPayOrderId: response.data.data.uroPayOrderId,
            orderId: order.id,
          });

    } catch (e) {
        console.log(e);
        return res.status(500).json({success:false,message:'The payment has failed'});
    }
}

module.exports=GenerateOrder;