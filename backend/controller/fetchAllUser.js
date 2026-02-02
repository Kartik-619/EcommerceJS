const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fetchAllUser = async (req, res) => {
    try {
        console.log(`[FETCH ALL USERS] Request by: ${req.user.username} (${req.user.role})`);
        
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
                        createdAt: true,  // Order has createdAt
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
                    },
                    orderBy: {
                        createdAt: 'desc'  // This is fine for orders
                    }
                }
            },
            orderBy: {
                id: 'desc'  // Changed from createdAt to id
                // OR use username: 'asc' if you want alphabetical
            }
        });

        // Calculate totals for each user
        const usersWithTotals = users.map(user => ({
            ...user,
            totalOrders: user.orders.length,
            totalSpent: user.orders
                .filter(order => order.status === 'COMPLETED')
                .reduce((sum, order) => sum + (order.totalAmount || 0), 0),
            // Add a "lastOrderDate" from their orders
            lastOrderDate: user.orders.length > 0 
                ? user.orders[0].createdAt  // First order is most recent due to orderBy
                : null
        }));

        console.log(`[FETCH ALL USERS] Returning ${users.length} users`);
        
        res.status(200).json({
            success: true,
            users: usersWithTotals,
            count: users.length
        });

    } catch (err) {
        console.error("Error in fetchAllUser:", err);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
}

module.exports = fetchAllUser;