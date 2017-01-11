var Feed = require('../Schema/feed_schema.js');
var mongoose = require('mongoose');


exports.getFeed = function( callback ) {
  Feed.find().populate("achievement").populate('user').exec( function( err, docs ) {
    callback(err, docs);
  });
}

exports.new = function( callback ) {
  var newFeed = new Feed({
    text: "Novo Post",
    achievement: "58716e7e0fa8e87cdade3f27",
    user: "58716195f5cb8d76df0d7cdc"
  });
  newFeed.save()
  callback(null, newFeed);
}
