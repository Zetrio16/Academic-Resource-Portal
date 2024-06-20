// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const authenticateJWT = require('../middleware/authentication');
router.post('/login', authController.login);
router.post('/register', authController.register);  // Add registration route
router.post('/logout', authController.logout);
router.get('/zain', (req, res)=>{
    res.send("Hello world")
  });

module.exports = router;
