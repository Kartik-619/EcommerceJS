const express=require('express');
const router=express.Router();
const prod=require('../controller/productFetch');

router.get("/",prod);


module.exports=router;