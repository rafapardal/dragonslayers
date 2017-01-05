var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var AchievementSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: String,
  description: String
});

module.exports = mongoose.model('achievement', AchievementSchema);
