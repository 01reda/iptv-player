const express = require('express');
const cors = require('cors');
const app = express();
const adminRoutes = require('./routes/admin.routes');
const channelRoutes = require('./routes/channel.routes');

app.use(cors());
app.use(express.json());

// Routes admin
app.use('/api/admin', adminRoutes);

// Routes chaînes IPTV
app.use('/api/channels', channelRoutes);


app.listen(5000, () => {
  console.log('Backend IPTV lancé sur http://localhost:5000');
});
