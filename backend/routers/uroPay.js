const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const generateOrder=require('../controller/order/uropayGenerateOrder');
const updateOrder=require('../controller/order/uropayUpdateOrder');

router.post("/uropay/makeorder", auth, generateOrder);

router.patch("/uropay/update", auth, updateOrder);

module.exports = router;
