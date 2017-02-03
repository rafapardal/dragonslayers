const express = require('express');
const router = express.Router();
const group = require('../models/group');

/* Get all achievements */
router.get('/', (req, res) => {
  group.getList( function(err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* New achievement */
router.post('/new', (req, res) => {
  group.new( req.body, function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
