const passport = require('../models/facebookStrategy');

module.exports.authenticate = passport.authenticate('facebook');

module.exports.return = passport.authenticate('facebook', {
  failureRedirect: '/login',
  scope: [ 'email', 'basic_info'],
  profileFields: ['id', 'displayName', 'emails'],
  display: 'popup'
});

module.exports.verify = (req, res, next)=> {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/'); // better handler needed for unauthenticated users trying to leave comments
  }
};

module.exports.user = (req, res)=> {
  res.json(req.user);
}

module.exports.redirect = (req, res)=> {
  res.redirect('/');
};
