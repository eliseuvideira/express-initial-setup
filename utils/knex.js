const knex = require('knex');

const config = require('./knex.config.js');

module.exports = knex(config);
