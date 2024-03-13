const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./db');

const app = express();
const port = 3000;

//middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//create a route to get all items
app.get('/items', (req,res) => {
    db.query('SELECT * FROM items', (error, results) => {
        if(error) {
        res.stats(500).send("Error retrieving items from database");
        } else {
            res.status(200).json(results);
        }
    });
});