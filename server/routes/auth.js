const express = require('express');
const router = express.Router();
const user = require('../models/user');

/* Login */
router.get('/login', (req, res) => {
  user.login(req.query.username, req.query.password, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

/* Sign Up */
router.post('/signup', (req, res) => {
  user.signUp();
});

module.exports = router;
