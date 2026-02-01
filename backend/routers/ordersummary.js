const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const OrderSummary=require('../controller/cart/checkout');
const requireRole=require('../middleware/verifyRole');

router.get('/ordersummary',auth,requireRole("USER"),OrderSummary);

module.exports=router;