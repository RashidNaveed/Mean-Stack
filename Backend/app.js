const express = require('express');

const app = express();

app.use((req, res , next) => {
  console.log('first middleware');
next();
});

app.use((req, res , next) => {
res.send('welcome to express!');
});

module.exports = app ;
