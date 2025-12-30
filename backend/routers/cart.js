const express=require('express');
const router=express.Router();
const AddToCart=require('../controller/cart/AddToCart');
router.get("/", AddToCart);


module.exports=router;