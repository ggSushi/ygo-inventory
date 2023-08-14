const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'ygo_inventory_db'
});

module.exports = pool;