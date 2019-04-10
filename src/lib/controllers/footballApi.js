'use strict';

const Promise = require('bluebird');
const request = require('superagent');

class footballApi {
    async getLeagues(ctx) {
        let res   = await request.get(`https://www.api-football.com/demo/api/leagues`)
        ctx.body   = res.body.api.leagues
        ctx.status = 200
    }
    
	async getStandings(ctx) {
        let leagueId = ctx.request.body.leagueId
		let res    = await request.get(`https://www.api-football.com/demo/api/standings/${leagueId}`)
		ctx.body   = res.body.api.standings
        ctx.status = 200
	}
}

module.exports = footballApi;
