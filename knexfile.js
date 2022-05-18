// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config({path:'/src/env/db.env'})
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database:process.env.DATABASE,
      user:process.env.USER,
      host:process.env.HOST,
      port:process.env.PORT,
      password:process.env.PASSWORD,
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
