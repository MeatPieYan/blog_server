const UserService = require('../service').User;

exports.isExist = function(loginname){
	// UserService.getUserByLoginName().then(( person ) => {
	// 	return Promise.resolve( true );
	// }).catch(( err ) => {
	// 	return Promise.resolve( false );
	// }) ;

	return new Promise((resolve, reject) => {
		UserService.getUserByLoginName(loginname).then(( person ) => {
			if(person) {
				return resolve(loginname);
			} else {
				return reject('user not found');
			}
		}).catch(( err ) => {
			console.dir( err );
			return reject('system error');
		}) ;
	});
}

