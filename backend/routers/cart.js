const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const AddToCart=require('../controller/cart/AddToCart');
router.get("/", auth,AddToCart);


module.exports=router;