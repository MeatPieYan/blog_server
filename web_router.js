const express = require('express');

const user = require('./controller/user');
const blog = require('./controller/blog');

const router = express.Router();

//index
router.get('/', function(req, res, next){
	res.send("hello world");
	next();
});

//blog
router.get('/blog/:name/list', blog.showList);

module.exports = router;