const express = require('express');
const router = express.Router();
const feed = require('../models/feed');

/* GET feed listing. */
router.get('/', (req, res) => {
  feed.getFeed( function(err, result) {
    if (err) throw "erro listar";
    res.json(result);
  });
});

// New Post
router.get('/new', (req, res) => {
  feed.new( function( err, result ) {
    if (err) throw "erro criar";
    res.json(result);
  });
});

module.exports = router;
