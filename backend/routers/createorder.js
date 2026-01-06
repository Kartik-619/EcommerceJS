const express=require('express');
const router=express.Router();
const CreateRouter=require('../controller/cart/CreateOrder');

router.post('/createorder',CreateRouter);

module.exports=router;