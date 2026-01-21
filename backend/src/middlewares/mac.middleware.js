const { allowedMacs } = require('../models/mac.model');

module.exports = (req, res, next) => {
  const mac = req.headers['x-device-mac'];

  if (!mac) {
    return res.status(401).json({ message: 'Adresse MAC manquante' });
  }

  if (!allowedMacs.includes(mac)) {
    return res.status(403).json({ message: 'Adresse MAC non autorisée' });
  }

  next();
};
