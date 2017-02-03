var Achievement = require('../Schema/achievement_schema.js');

exports.getList = function( callback ) {
  Achievement.find()
  .populate("achievement").populate('group')
  .exec(function( err, docs ) {
    callback(null, docs);
  });
}

exports.new = function(achievement, callback ) {
  var newAchievement = new Achievement({
    name: achievement.title,
    description: achievement.description,
    group: achievement.group
  });
  newAchievement.save()
  callback(null, newAchievement);
}
