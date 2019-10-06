module.exports = {
  client: process.env.KNEX_CLIENT,
  connection: {
    server: process.env.KNEX_SERVER,
    database: process.env.KNEX_DATABASE,
    port: parseInt(process.env.KNEX_PORT, 10),
    user: process.env.KNEX_USER,
    password: process.env.KNEX_PASSWORD,
    options: {
      encrypt: !!process.env.KNEX_ENCRYPT,
    },
  },
  pool: {
    min: parseInt(process.env.KNEX_POOL_MIN, 10) || 2,
    max: parseInt(process.env.KNEX_POOL_MAX, 10) || 20,
  },
};
