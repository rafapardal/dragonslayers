const express = require('express');
const router = express.Router();
const feed = require('../models/feed');

/* GET feed listing. */
router.get('/', (req, res) => {
  feed.getFeed( function(err, result) {
    res.json(result);
  });
});

// POST Create Post
router.post('/createpost', (req, res) => {
  feed.createPost( req.body, function( err, result ) {
    res.json(result);
  });
});

// POST Delete Post
router.post('/deletepost', (req, res) => {
  feed.deletePost( req.body, function( err, result ) {
    res.json(result);
  });
});

module.exports = router;
