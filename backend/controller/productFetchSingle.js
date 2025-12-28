const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ProductSingle=async (req,res)=>{
    const id=Number(req.params.id);
    try{
        const product=await prisma.product.findUnique({
            where:{id:Number(id)},
            include: {
                images: true,   // Changed from productImage
                variants: true, // Changed from productVariant
                specs: true     // Changed from productSpec
            }
                
            
        });
        if(!product){
            return res.status(400).json({success:false,message:'Item not Available !!'});
        }
        res.json(product)
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,message:'Failed to fetch the product'})  
    }
}
module.exports=ProductSingle