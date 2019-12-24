const express = require('express');

const app = express();

app.use((req, res, next)=>{

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/posts', (req, res , next) => {

  const posts = [
    { id:'1',
      title:'First Post',
      content: 'This is dummy data from backend'},
    { id:'2',
      title:'Second Post',
      content: 'This is an other dummy data from backend'}

  ];

res.status(200).json({
          message: 'Fetching Successful',
          posts: posts
});
});

module.exports = app ;
