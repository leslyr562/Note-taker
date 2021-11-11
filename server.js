const cTable = require('console.table');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhots',
    user: 'root',
    password: 'abc123',
    database: 'test'
});



