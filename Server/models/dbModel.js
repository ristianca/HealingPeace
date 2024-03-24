/*dbModels is a module that connects to the database and exports the connection object.
 This module is used by the server to connect to the database.*/

const mysql = require('mysql');
require('dotenv').config();



const connection = new mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    insecureAuth: process.env.DB_AUTH
});

const connectDB = async () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database');
        return connection;
    });
}

const disconnectDB = async () => {
    connection.end((err) => {
        if (err) {
            console.error('Error disconnecting from database:', err);
            return;
        }
        console.log('Disconnected from database');
    }
    );
}

module.exports = connection;
module.exports = { connectDB, disconnectDB };


