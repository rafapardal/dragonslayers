var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  username: String,
  password: String,
  name: {
    first: String,
    last: String
  },
  achievements: [{ type : Schema.Types.ObjectId, ref: 'achievement' }]
});

module.exports = mongoose.model('User', UserSchema);
