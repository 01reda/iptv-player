const express = require('express');
const router = express.Router();
const controller = require('../controllers/mac.controller');

// Ajouter une adresse MAC autorisée
router.post('/add', controller.addMac);

module.exports = router;
