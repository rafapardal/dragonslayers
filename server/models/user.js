var User = require('../Schema/user_schema.js');
const crypt = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');

exports.login = function(username, password, callback) {
  User.findOne({ 'username': {'$regex': new RegExp(["^", username, "$"].join(""), "i")} }, function(err, docs) {
    if(docs && docs.password == crypt(password)) {
      var token = jwt.sign(docs, "DragonSlayers", { expiresIn: '24h' });
      console.log(docs._id);
      callback(null, { success: true, id_user: docs._id, token: token });
    } else {
      callback(null, { success: false, mensagem: "Utilizador e password não existem" });
    };
  })
}

exports.signUp = function(user, callback) {
    var newUser = new User({
      username: user.username,
      password: crypt(user.password),
      name: {
        first: user.firstname,
        last: user.lastname
      },
      achievements: user.achievements
    });
    newUser.save();
    callback(null, { success: true, mensagem: "Utilizador criado com sucesso",  username: user.username, password: user.password});
}

exports.getUser = function(id, callback) {
  User.findOne({ '_id': id }, function(err, docs) {
      callback(null, { success: true, user: docs});
  })
}

exports.checkUsername = function(username, callback) {
  User.findOne({ 'username': {'$regex': new RegExp(["^", username, "$"].join(""), "i")} }, function(err, docs) {
    if (docs) {callback(null, { success: true, result: true});}
    else {callback(null, { success: true, result: false});}
  })
}

exports.getUserAchievements = function(id, callback) {
  User.findOne({ '_id': id }, function(err, docs) {
    callback(null, { achievements: docs.achievements });
  });
}

exports.addAchievement = function(achievements, callback) {
  User.findOneAndUpdate({ '_id': achievements.id },{ $push: { 'achievements':  achievements.achievement.result._id} }, { upsert:false }).exec(function(err, docs) {
      callback(null, {success: true, mensagem:"Inserido com sucesso"});
  });
}

exports.removeAchievement = function(id, idAchievement, callback) {
  console.log(idAchievement);
  User.findOneAndUpdate({ '_id': id },{ $pull: { 'achievements':  idAchievement} }, { upsert:false }).exec(function(err, docs) {
      callback(null, {success: true, mensagem:"eliminado com sucesso"});
  });
}
