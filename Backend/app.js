const express = require('express');

const app = express();


app.use('/api/posts', (req, res , next) => {

  const posts = [
    { id:'1',
      title:'First Post',
      content: 'This is dummy data from backend'},
    { id:'1',
      title:'Second Post',
      content: 'This is an other dummy data from backend'}

  ];

res.json();
});

module.exports = app ;
