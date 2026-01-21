const express = require('express');
const router = express.Router();
const controller = require('../controllers/channel.controller');
const macMiddleware = require('../middlewares/mac.middleware');


// GET toutes les chaînes IPTV
router.get('/',macMiddleware, controller.getChannels);

// POST ajouter une chaîne IPTV
router.post('/',macMiddleware, controller.addChannel);

module.exports = router;
