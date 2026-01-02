const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const OrderSummary=require('../controller/cart/checkout');

router.get('/ordersummary',auth,OrderSummary);

module.exports=router;