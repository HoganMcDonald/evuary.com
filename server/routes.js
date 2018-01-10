const router = require('express').Router();
const login = require('./controllers/login.controller');

// routes at /api
router.route('/login')
  .get(login.authenticate);

router.route('/login/return')
  .get(login.return, login.redirect);

router.route('/profile')
  .get(login.user)

module.exports = router;
