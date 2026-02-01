const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const CreateRouter=require('../controller/cart/CreateOrder');
const requireRole=require("../middleware/verifyRole");

router.post('/createorder',auth,requireRole("USER"),CreateRouter);

module.exports=router;