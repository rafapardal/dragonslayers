var Achievement = require('../Schema/achievement_schema.js');

exports.getList = function( callback ) {
  Achievement.find()
  .populate("achievement").populate('group')
  .exec(function( err, docs ) {
    callback(null, docs);
  });
}

exports.create = function(achievement, callback ) {
  var newAchievement = new Achievement({
    name: achievement.name,
    description: achievement.description,
    group: achievement.group
  });
  newAchievement.save()
  callback(null, newAchievement);
}

exports.update = function(achievement, callback ) {
  Achievement.findOne({ _id: achievement.id }, function(err, docs){
    docs.name = achievement.name;
    docs.description = achievement.description;
    docs.group = achievement.group;
    docs.save();
    callback(null, docs);
  });
}

exports.delete = function(achievementID, callback ) {
  Achievement.remove({ _id: achievementID }, function(err, docs){
    callback(null, 'apagado');
  });
}
