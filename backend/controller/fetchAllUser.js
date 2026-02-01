const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fetchAllUser = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                orders: {
                    select: {
                        id: true,
                        status: true,
                        totalAmount: true,
                        orderItems: {
                            select: {
                                quantity: true,
                                price: true,
                                product: {
                                    select: {
                                        slug: true,
                                        model: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Calculate totals for each user
        const usersWithTotals = users.map(user => ({
            ...user,
            totalOrders: user.orders.length,
            totalSpent: user.orders.reduce((sum, order) => 
                sum + (order.totalAmount || 0), 0)
        }));

        res.status(200).json({
            success: true,
            users: usersWithTotals,
            count: users.length
        });

    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch users"
        });
    } 
}

module.exports = fetchAllUser;