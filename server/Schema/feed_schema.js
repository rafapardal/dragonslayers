var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var FeedSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  text: String,
  achievement: { type : Schema.Types.ObjectId, ref: 'Achievement' },
  user: { type : Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  comments : [{
    _id: { type: Schema.Types.ObjectId },
    comment: String,
    user: { type : Schema.Types.ObjectId, ref: 'User' },
    createdAt: Date
  }]
});

module.exports = mongoose.model('Feed', FeedSchema);
