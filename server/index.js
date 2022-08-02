const list = require('./data.js');

// Seção 1
const express = require('express');
const app = express();

// Seção 2
app.get('/', (req, res) => {
  res.send({ list });
});

// Seção 3
app.listen(8080, () => {
  
});
