/**
 * https://www.npmjs.com/package/mysql2
 */

// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'huonghbhb',
    database: 'nodejsbasic'
});

export default connection;