var Feed = require('../Schema/feed_schema.js');
var mongoose = require('mongoose');


exports.getFeed = function( callback ) {
  Feed.find({ active: true })
  .sort({ createdAt: -1 })
  .populate("achievement").populate('user')
  .exec( function( err, docs ) {
    callback(null, docs);
  });
}

exports.createPost = function( post, callback ) {
  Feed.findOne({ achievement: post.idAchievement, user: post.idUser }, function(err, docs){
    if(docs){
      docs.active = true;
      docs.createdAt = new Date();
      docs.save();
    } else {
      var newPost = new Feed({
        title: "Achievement concluido",
        text: 'concluiu o achievement "'+ post.achievementName + '"',
        achievement: post.idAchievement,
        user: post.idUser,
      });
      newPost.save()
    }
    callback(null, "atualizado com sucesso");
  });
}

exports.deletePost = function( post, callback ) {
  Feed.findOne({ achievement: post.idAchievement, user: post.idUser }, function(err, docs){
    docs.active = false;
    docs.save();
    callback(null, docs);
  });
}
