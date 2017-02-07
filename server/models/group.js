var Group = require('../Schema/group_schema.js');

exports.getList = function( callback ) {
  Group.find({}, function( err, docs ) {
    callback(err, docs);
  });
}

exports.create = function(group, callback ) {
  var newGroup = new Group({
    name: group.name
  });
  newGroup.save()
  callback(null, newGroup);
}

exports.update = function(group, callback ) {
  Group.findOne({ _id: group.id }, function(err, docs){
    docs.name = group.name;
    docs.save();
    callback(null, docs);
  });
}

exports.delete = function(groupID, callback ) {
  Group.remove({ _id: groupID }, function(err, docs){
    callback(null, 'apagado');
  });
}
