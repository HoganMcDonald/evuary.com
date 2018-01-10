const passport = require('../models/facebookStrategy');

module.exports.authenticate = passport.authenticate('facebook');
