var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var GroupSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: String
});

module.exports = mongoose.model('Group', GroupSchema);
