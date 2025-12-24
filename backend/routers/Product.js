const express=require('express');
const router=express.Router();
const prod=require('../controller/productFetchAll');
const getProductById=require('../controller/productFetchSingle')

router.get("/",prod);
router.get("/:id", getProductById);


module.exports=router;