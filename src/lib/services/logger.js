'use strict';

const config        = require('config');
const bunyan        = require('bunyan');
const Elasticsearch = require('bunyan-elasticsearch');
const pjson         = require('../../../package.json');


const esStream = new Elasticsearch({
	indexPattern: '[football-api-logs-]YYYY',
	type        : 'logs',
	host        : `http://${config.logger.elasticsearch.host}`
});
esStream.on('error', function (err) {
	console.log('Elasticsearch Stream Error:', err.stack);
});

module.exports = bunyan.createLogger({
	name       : `football-api-${process.env.NODE_ENV}-${pjson.name}`,
	serializers: bunyan.stdSerializers,
	src        : true,
	streams    : [
		{
			stream: process.stdout,
			level : config.logger.level
		},
		{
			stream: esStream,
			level : config.logger.level
		}
	]
});
