const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(bookRoutes);

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
