const knex = require('knex')
const NODE_ENV = process.env.NODE_ENV
const configuration = require('./knexfile.js')
const config = NODE_ENV === 'production' ? configuration.production : configuration.development
const connection = knex(config)
module.exports = { connection }
