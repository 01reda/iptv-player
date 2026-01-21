const { allowedMacs } = require('../models/mac.model');

// Ajouter une adresse MAC autorisée (admin)
exports.addMac = (req, res) => {
  const { mac } = req.body;

  if (!mac) {
    return res.status(400).json({ message: 'Adresse MAC manquante' });
  }

  if (allowedMacs.includes(mac)) {
    return res.status(409).json({ message: 'MAC déjà autorisée' });
  }

  allowedMacs.push(mac);

  res.json({ message: 'Adresse MAC ajoutée avec succès' });
};
