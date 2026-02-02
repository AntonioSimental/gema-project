const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    database: 'gema',
    user: 'root',
    password: '',
    waitForConnections: true,
    queueLimit: 0,
    connectionLimit: 10
});

module.exports = db;