const { Pool } = require("pg");

const connect = {
  user: 'risky',
  host: 'localhost',
  database: 'Testing',
  password: "30second",
  port: '5432',
};
const pool = new Pool(connect);
module.exports = {
  query: (text: string, params: any) => pool.query(text, params),
};
