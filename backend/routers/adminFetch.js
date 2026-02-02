const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const fetchAllUser=require('../controller/fetchAllUser');
const requireRole=require("../middleware/verifyRole");

router.get('/users',auth,requireRole("ADMIN"),fetchAllUser);

module.exports=router;