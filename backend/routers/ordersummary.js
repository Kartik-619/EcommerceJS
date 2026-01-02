const express=require('express');
const router=express.Router();
const OrderSummary=require('../controller/cart/checkout');

router.get('/ordersummary',OrderSummary);

module.exports=router;