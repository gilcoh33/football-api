'use strict';

const health       = require('./lib/controllers/health');
const FootballApi = require('./lib/controllers/footballApi');


exports.configureRoutes = async (router) => {
	const footballApi = new FootballApi();
	router.get('/health', health.getStatus);
	router.get('/leagues', footballApi.getLeagues.bind(footballApi));
	router.post('/standings', footballApi.getStandings.bind(footballApi));
};