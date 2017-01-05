var User = require('../Schema/user_schema.js');
const jwt = require('jsonwebtoken');

exports.login = function(username, password, callback) {
  User.findOne({ 'username': username }, function(err, docs) {
    if(docs && docs.password === password) {
      var token = jwt.sign(docs, "DragonSlayers", { expiresIn: '24h' });
      callback(null, { success: true, id_user: docs._id, token: token });
    } else {
      callback(null, { success: false, mensagem: "Utilizador e password não existem" });
    };
  })
}

exports.signUp = function(username, password, name, callback) {
  //receber o username, password e <nome>
  //comparar se username já existe
    // se existir
      // status 404
      // mensagem de erro
    // se não existir
      // status 200 ok
      // inserir registo
      // retornar username e password para fazer login
}
