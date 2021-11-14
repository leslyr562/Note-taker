const mysql = require('mysql2');

//Connect database 
const db = mysql.createConnection({
  host: 'localhost',
  //  MySQL username,
  user: 'root',
  //  MySQL password
  password: 'abc123',
  database: 'tracker'
});

module.exports = db;