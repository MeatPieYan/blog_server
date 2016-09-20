const models = require('../models');
const Blog = models.Blog;

exports.getBlogsByLoginName = function(loginName) {
	return Blog.find({author: loginName}).exec();
}

exports.createBlog = function(blog) {
	blog = new Blog({
		title: "test",
		article: "test test test 122341412341",
		author: "robin"
	})

	return blog.save();
}