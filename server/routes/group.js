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

/* New group */
router.post('/create', (req, res) => {
  group.create( req.body, function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* Update group */
router.put('/update', (req, res) => {
  group.update( req.body, function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

/* Delete group */
router.delete('/delete', (req, res) => {
  group.delete( req.query.id, function( err, result ) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
