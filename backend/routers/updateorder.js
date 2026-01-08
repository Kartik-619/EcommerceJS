const express=require('express');
const router=express.Router();
const updateRouter=require('../controller/cart/updateOrder');

router.patch('/orderdone',updateRouter);

module.exports=router;