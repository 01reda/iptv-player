const express = require('express');
const router = express.Router();
const { createAdmin, loginAdmin } = require('../controllers/admin.controller');

// Créer admin (POST)
router.post('/create', createAdmin);

// Login admin (POST)
router.post('/login', loginAdmin);

module.exports = router;
