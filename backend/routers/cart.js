const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const requireRole=require("../middleware/verifyRole");

const addToCart = require("../controller/cart/AddToCart");
const fetchCart = require("../controller/cart/cartFetch");

// ADD ITEM → POST
router.post("/addtocart", auth, requireRole("USER"),addToCart);

// FETCH CART → GET
router.get("/cart", auth, fetchCart, requireRole("USER"));

module.exports = router;
