const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const authorize = require('../middleware/roleMiddleware');

// Public route
router.get('/public-news', (req, res) => res.send("Anyone can see this"));

// Protected: Any logged-in user
router.get('/profile', verifyToken, (req, res) => {
    res.json({ message: "Welcome user", data: req.user });
});

// RBAC: Only Admins can access
router.get('/admin/stats', verifyToken, authorize(['admin']), (req, res) => {
    res.json({ message: "Welcome Admin, here is the sensitive data." });
});

// RBAC: Admins OR Editors can access
router.post('/content/create', verifyToken, authorize(['admin', 'editor']), (req, res) => {
    res.json({ message: "Content created successfully" });
});

module.exports = router;