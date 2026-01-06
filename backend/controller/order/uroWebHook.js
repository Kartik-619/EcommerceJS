const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const verifySignature = require("../../utils/verifyUropaysignature");

const uropayWebhook = async (req, res) => {
  try {
    const signature = req.headers["x-uropay-signature"];
    const environment = req.headers["x-uropay-environment"];
    const webhookId = req.headers["x-uropay-webhook-id"];

    const payload = req.body;

    // STEP 1: Verify signature
    const isValid = verifySignature(payload, signature, environment);

    if (!isValid) {
      console.error(" Invalid UroPay signature");
      return res.status(200).json({ message: "Invalid signature" });
    }

    const referenceNumber = payload.referenceNumber;

    if (!referenceNumber) {
      return res.status(200).json({ message: "No reference number" });
    }

    // STEP 2: Find order by reference or pending payment
    const order = await prisma.order.findFirst({
      where: {
        upiReference: referenceNumber,
      },
    });

    // Already processed (idempotency)
    if (order?.status === "COMPLETED") {
      return res.status(200).json({ message: "Already processed" });
    }

    // STEP 3: Match by UroPay order ID if ref not yet saved
    const pendingOrder = await prisma.order.findFirst({
      where: {
        status: "pending",
      },
      orderBy: { createdAt: "desc" },
    });

    if (!pendingOrder) {
      return res.status(200).json({ message: "Order not found" });
    }

    // STEP 4: Update order
    await prisma.order.update({
      where: { id: pendingOrder.id },
      data: {
        status: "COMPLETED",
        upiReference: referenceNumber,
      },
    });

    console.log(" Payment confirmed for order:", pendingOrder.id);

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("Webhook Error:", err);
    return res.status(200).json({ message: "Webhook error handled" });
  }
};

module.exports = uropayWebhook;
