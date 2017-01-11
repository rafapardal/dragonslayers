const express = require('express');
const router = express.Router();
const achievement = require('../models/achievement');

/* New achievement */
router.get('/new', (req, res) => {
  achievement.new( function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
