var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var AchievementSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: String,
  description: String,
  group: { type : Schema.Types.ObjectId, ref: 'Group' },
  editable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Achievement', AchievementSchema);
