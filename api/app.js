const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

router.post('/track-data', (req, res) => {
  const data = req.body;
  console.log('storing data...', data);
  res.status(200).json({ message: 'OK' });
});

app.use(router);

module.exports = app;
