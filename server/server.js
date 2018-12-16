//Requirements
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./database-connection');

//Globals
const app = express();

//Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('build'));

//Server Listen
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port: ', port);
});