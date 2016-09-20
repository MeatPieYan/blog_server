const mongoose = require('mongoose');
const config   = require('../config');
// const logger = require('../common/logger')

mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
require('./user');
require('./blog');

exports.User = mongoose.model('User');
exports.Blog = mongoose.model('Blog');
