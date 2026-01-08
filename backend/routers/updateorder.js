const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const updateRouter=require('../controller/cart/updateOrder');

router.patch('/orderdone',auth,updateRouter);

module.exports=router;