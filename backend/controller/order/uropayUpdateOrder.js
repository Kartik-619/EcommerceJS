const axios=require('axios');
const getUroPayHeaders = require("../../utils/uropayAuth");

const uroPayUpdate=async(req,res)=>{
    const {uroPayOrderId,referenceNumber}=req.body;

    try{
        //as per the docs this is required to be sent for verification
        const response=await axios.patch( `${process.env.UROPAY_API_URL}/order/update`,
            {
              uroPayOrderId,
              referenceNumber,
            },
            { headers: getUroPayHeaders() });
            
            res.json(response.data);
    }catch(e){
        console.log('UroPay update error',e);
        res.status(500).json({ message: "Failed to update order" });
    }
}

module.exports=uroPayUpdate;