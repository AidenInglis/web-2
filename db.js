//TODO - create a db connection
require ('dotenv').config();
const mysql = require('mysql');

//create a connection to my database
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//write a funciton to check the connection to the database
dbConnection.connect((error) => {
    if(error) throw error
    console.log('Error connecting to the database');
});

module.exports = dbConnection;
    