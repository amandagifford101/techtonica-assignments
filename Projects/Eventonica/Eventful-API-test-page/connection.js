//require packages
const Pool = require("pg").Pool;
// const pgKey = require('./keys');

 //create PostgreSQL connection
const connection = new Pool({
  user: 'amandagifford',
  host: 'localhost',
  database: 'eventonica',
  password: process.env.DB_PASSWORD,
  port: 5432
});

 module.exports = connection;