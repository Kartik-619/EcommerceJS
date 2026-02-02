const express=require('express');
const router=express.Router();
const prod=require('../controller/productFetchAll');
const getProductById=require('../controller/productFetchSingle');
const requireRole=require("../middleware/verifyRole");


router.get("/",requireRole("USER"||"ADMIN"),prod);
router.get("/:id",requireRole("USER"||"ADMIN") ,getProductById);


module.exports=router;