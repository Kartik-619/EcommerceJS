const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const CreateRouter=require('../controller/cart/CreateOrder');

router.post('/createorder',auth,CreateRouter);

module.exports=router;