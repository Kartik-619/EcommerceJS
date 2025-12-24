const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ProductList = async (req, res) => {
    try {
        const prodList = await prisma.product.findMany({
            // 1. Select/Include what you need
            //the product model (price,model and all) is included by default because its the root directory 
            include: {
                images: {
                    orderBy: { order: "asc" },
                    take: 1 // Only get the first image
                },
                specs: true // Includes the product specifications
            },
            // 2. Global ordering (newest first)
            orderBy: {
                createdAt: "desc"
            }
        });

        res.json(prodList);
    } catch (err) {
        console.error('Error in ProductList:', err);
        return res.status(500).json({
            success: false, 
            message: 'We failed to fetch the product list' 
        });
    }
}

module.exports = ProductList;