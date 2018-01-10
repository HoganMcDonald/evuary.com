const passport = require('../models/facebookStrategy');

module.exports.authenticate = function(req, res, next) {
  res.send('you did it');
};
