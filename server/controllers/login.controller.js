const passport = require('../models/facebookStrategy');

module.exports.authenticate = passport.authenticate('facebook');

module.exports.return = passport.authenticate('facebook', { failureRedirect: '/login' });

module.exports.user = (req, res)=> {
  res.json(req.user);
}

module.exports.redirect = (req, res)=> {
  res.redirect('/');
};
