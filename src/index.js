'use strict';

const config     = require('config');
const koa        = require('koa');
const bodyParser = require('koa-bodyparser');
const Router     = require('koa-router');
const cors       = require('@koa/cors');
const pjson      = require('../package.json');
const routes     = require('./routes');


const app    = new koa();
const router = new Router();

// app configuration
app.name = pjson.name;

// Response Handlers
app.use(cors({ credentials: true }));
app.use(bodyParser());
app.use(router.allowedMethods());
app.use(router.routes());

routes.configureRoutes(router);


app.listen(config.server.port);

console.log('running...');
