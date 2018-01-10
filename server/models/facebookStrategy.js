const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;

passport.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: (process.env.NODE_ENV === 'development') ? 'http://localhost:3000/api/login/return' : 'http://evuary.com/api/login/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('strategy cb hit');
    return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
