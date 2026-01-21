const channels = require('../models/channel.model'); // <-- pas de {}

exports.getChannels = (req, res) => {
  res.json(channels);
};

exports.addChannel = (req, res) => {
  const { name, url } = req.body;

  if (!name || !url) {
    return res.status(400).json({ message: 'Nom ou URL manquant' });
  }

  channels.push({ name, url });
  res.json({ message: 'Chaîne ajoutée avec succès', channels });
};
