const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const User = require('./user.model');

passport.use(new Strategy({
   clientID: process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,
   callbackURL: (process.env.NODE_ENV === 'development') ? 'http://localhost:3000/api/login/return' : 'http://evuary.com/api/login/return',
   profileFields: ['id', 'name', 'picture.type(small)', 'displayName']
 },
 function(accessToken, refreshToken, profile, done) {
   User.findOne({ 'facebook.id': profile.id }, function (err, user) {
     console.log('==============', profile);
     if (err) { return done(err) }
     if (!user) {
       user = new User({
         fb_id: profile.id,
         name: profile.displayName,
         profile_photo: profile.photos[0].value
       })
       user.save(function (err) {
         if (err) console.log(err)
         return done(err, user)
       })
     }
     else {
       return done(err, user)
     } // create user conditional
   }) // db find one
 } // callback from middleware
)) // middleware use

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
