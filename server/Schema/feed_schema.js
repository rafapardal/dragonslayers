var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var FeedSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  text: String,
  achievement: { type : Schema.Types.ObjectId, ref: 'Achievement' },
  user: { type : Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Feed', FeedSchema);
