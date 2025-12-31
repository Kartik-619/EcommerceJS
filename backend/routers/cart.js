const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const addToCart = require("../controller/cart/AddToCart");
const fetchCart = require("../controller/cart/cartFetch");

// ADD ITEM → POST
router.post("/", auth, addToCart);

// FETCH CART → GET
router.get("/", auth, fetchCart);

module.exports = router;
