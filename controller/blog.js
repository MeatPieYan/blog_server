const User = require('./user');
const BlogService = require('../service').Blog;

exports.showList = function(req, res, next) {
	const loginname = req.params.name;
	User.isExist(loginname)
		.then(getBlogsByLoginName)
		.then(( blogs ) => { res.send(blogs) })
		.catch( ( msg ) => { res.send(msg) });
}

function getBlogsByLoginName(loginName) {
	console.log("getBlogsByLoginName: loginName: ",loginName);

	return new Promise((resolve, reject) => {
		BlogService.getBlogsByLoginName(loginName).then( (blogs) => {
			if(blogs) {
				return resolve(blogs);
			} else {
				return reject("No Blogs");
			}
		}).catch(( err ) => {
			console.dir( err );
			return reject('system error');
		}) ;
	});
}