var Achievement = require('../Schema/achievement_schema.js');

exports.new = function( callback ) {
  var newAchievement = new Achievement({
    name: "Novo Achievement",
    description: "Nova Descrição"
  });
  newAchievement.save()
  callback(newAchievement);
}
