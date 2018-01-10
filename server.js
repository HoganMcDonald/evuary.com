// environment variabels
require('dotenv').config();

// modules
const express = require('express');
const passport = require('./server/models/facebookStrategy');
const app = express();
const path = require('path');

// middleware
app.use(express.static('public'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.route('/')
  .get((req, res)=> {
    res.sendFile(path.resolve('public/views/index.min.html'));
  });

app.use('/api', require('./server/routes.js'));

// server
const server = app.listen(process.env.PORT || 3000);
module.exports = server;
