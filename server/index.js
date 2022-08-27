const list = require('./data.js');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ list });
});

app.listen(8080, () => {
  
});
