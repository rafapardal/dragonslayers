var Group = require('../Schema/group_schema.js');

exports.getList = function( callback ) {
  Group.find({}, function( err, docs ) {
    callback(err, docs);
  });
}

exports.new = function(group, callback ) {
  var newGroup = new Group({
    name: group.name
  });
  newGroup.save()
  callback(null, newGroup);
}
