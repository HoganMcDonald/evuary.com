const router = require('express').Router();
const login = require('./controllers/login.controller');
const comment = require('./controllers/comment.controller');

// routes at /api
router.route('/login')
  .get(login.authenticate);

router.route('/login/return')
  .get(login.return, login.redirect);

router.route('/profile')
  .get(login.user)

router.route('/comments')
  .get(comment.all)
  .post(login.verify, comment.new)

module.exports = router;
