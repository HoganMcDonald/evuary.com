// environment variabels
require('dotenv').config();

// modules
const express = require('express');
const passport = require('./server/models/facebookStrategy');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// connect to db
const db = mongoose.connect(process.env.MONGODB_URI).connection;
db.on('error', (err)=>
  console.error.bind(console, 'connection error:', err));
db.once('open', ()=> {
  console.log('mongodb connection is open')
});

// middleware
app.use(express.static('public'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// prevents cors issue on client
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// routes
app.route('/')
  .get((req, res)=> {
    res.sendFile(path.resolve('public/views/index.min.html'));
  });

app.use('/api', require('./server/routes.js'));

// server
const server = app.listen(process.env.PORT || 3000);
module.exports = server;
