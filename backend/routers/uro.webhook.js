const express = require("express");
const router = express.Router();
const webhook = require("../controller/order/uroWebHook");

router.post(
  "/webhook/uropay",
  express.json({ type: "application/json" }),
  webhook
);

module.exports = router;
