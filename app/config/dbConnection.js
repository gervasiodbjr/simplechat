import mysql from 'mysql2';

const connection = mysql.createConnection({
    hostname: '127.0.0.1',
    user: 'root',
    password: 'xptomyadmin',
    database: 'simplechat'
});

module.exports = () => {
    return connection;
};