const models = require('../models');
const User = models.User;

exports.getUserByLoginName = function (loginName) {
  return User.findOne({'loginname': new RegExp('^'+loginName+'$', "i")}).exec();
};

exports.createUser = function(user){
	user = new User({loginname: 'Robin', name: 'Robin'}); //for fake
	return user.save();
};