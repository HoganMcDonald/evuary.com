const router = require('express').Router();
const login = require('./controllers/login.controller');

// routes at /api
router.route('/login')
  .get(login.authenticate);

module.exports = router;
