const express = require('express');
const router = express.Router();
const achievement = require('../models/achievement');

/* Get all achievements */
router.get('/', (req, res) => {
  achievement.getList( function(err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* New achievement */
router.post('/new', (req, res) => {
  achievement.create( req.body, function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* Update achievement */
router.put('/update', (req, res) => {
  achievement.update( req.body, function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* Delete achievement */
router.delete('/delete', (req, res) => {
  achievement.delete( req.query.id, function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
