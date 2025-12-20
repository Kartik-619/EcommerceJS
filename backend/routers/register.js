const express=require('express');
const router=express.Router();
const {register}=require('../controller/registerController');

router.post('/api',register);
module.exports=router;