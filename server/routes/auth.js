const express = require('express');
const router = express.Router();
const user = require('../models/user');

/* Login */
router.get('/login', (req, res) => {
  user.login( req.query.username, req.query.password, function(err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* Sign Up */
router.post('/signup', (req, res) => {
  user.signUp( req.body, function(err, result ){
    if (err) throw err;
    res.json(result);
  });
});

// GET user single data
router.get('/getuser', (req, res) => {
  user.getUser( req.query.id, function(err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

//check if user exists
router.get('/checkusername', (req, res) => {
  user.checkUsername( req.query.username, function(err, result ) {
    if (err) throw err;
    res.json(result);
  });
});


/* get user achievements */
router.get('/userachievements', (req, res) => {
  user.getUserAchievements(req.query.id, function(err, result) {
    res.json(result);
  });
});

/* update user achievements */
router.put('/addachievement', (req, res) => {
  user.addAchievement( req.body, function(err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* delete user achievements */
router.delete('/removeachievement', (req, res) => {
  user.removeAchievement( req.query.id, req.query.achievement, function(err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
