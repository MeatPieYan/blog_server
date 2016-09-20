const express = require('express');

// const logger = require('./common/logger');

const config = require('./config');
const webRouter = require('./web_router');

require('./models');


const urlinfo = require('url').parse(config.host);
config.hostname = urlinfo.hostname || config.host;

const app = express();


app.use('/', webRouter);

if (!module.parent) {
  app.listen(config.port, function () {
    console.info('NodeClub listening on port', config.port);
    console.info('God bless love....');
    console.info('You can debug your app with http://' + config.hostname + ':' + config.port);
    console.info('');
  });
}