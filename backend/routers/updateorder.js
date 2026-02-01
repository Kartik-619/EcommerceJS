const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const updateRouter=require('../controller/cart/updateOrder');
const requireRole=require("../middleware/verifyRole");
router.patch('/orderdone',auth,requireRole("USER"),updateRouter);

module.exports=router;