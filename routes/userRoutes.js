const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register user
router.post('/register', userController.registerUser);

// Verify OTP
router.post('/verify', userController.verifyOTP);

// Add additional user info
router.put('/info', userController.addUserInfo);

// Login user
router.post('/login', userController.loginUser);

// Get user info
router.get('/info', userController.getUserInfo);

module.exports = router;