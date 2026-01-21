const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin = require('../models/admin.model');

const SECRET_KEY = 'IPTV_SECRET_KEY';

// 1️⃣ Créer admin
exports.createAdmin = async (req, res) => {
    console.log('Body reçu:', req.body);
  if (admin.password) {
    return res.status(403).json({ message: 'Admin déjà créé' });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  admin.username = username;
  admin.password = await bcrypt.hash(password, 10); // hash sécurisé

  res.json({ message: 'Admin créé avec succès' });
};

// 2️⃣ Login admin
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  // Vérifie si l'admin existe et username correct
  if (!admin.password || username !== admin.username) {
    return res.status(401).json({ message: 'Identifiants invalides' });
  }

  // Vérifie le mot de passe avec bcrypt
  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }

  // Génère token JWT
  const token = jwt.sign({ role: 'admin' }, SECRET_KEY, { expiresIn: '2h' });

  res.json({ token });
};
