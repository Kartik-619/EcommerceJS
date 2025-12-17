const express=require('express');
const router=express.Router();
const {login}=require('../controller/loginControler');

router.post('/',login);
module.exports=router;