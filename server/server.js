//Requirements
const express = require('express');

//Globals
const app = express();
const bodyParser = require('body-parser');

//Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('build'));

//Server Listen
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port: ', port);
});