const path = require('path');
const express = require('express');
const app = express();

// middleware
app.use(express.static('public'));

// routes
app.route('/')
  .get((req, res)=> {
    res.sendFile(path.resolve('public/views/index.min.html'));
  });

app.route('/api')
  

// server
const server = app.listen(process.env.PORT || 3000);
module.exports = server;
