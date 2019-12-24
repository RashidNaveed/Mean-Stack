const express = require('express');

const app = express();


app.use('/api/posts', (req, res , next) => {
res.send('welcome to express!');
});

module.exports = app ;
