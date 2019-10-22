const knex = require("knex");

//* import knex configuration
const knexConfig = require('../knexfile');

const env = process.env.DB_ENV || 'development'

//* create and export database/knex connection
module.exports = knex(knexConfig[env]);