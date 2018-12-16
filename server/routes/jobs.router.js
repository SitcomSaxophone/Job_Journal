//Requires
const express = require('express');
const mongoose = require('mongoose');

//Globals
const router = express.Router();

//Schema
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    dateAdded: { type: Date, reqruied: true }
})

const Job = mongoose.model('job', jobSchema);

//DB Requests
router.post('/', (req, res) => {
    let dataFromClient = req.body;
    Job.create(dataFromClient)
    .then(() => {
        console.log('POST successful to database');
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error posting query to database: ', error);
        res.sendStatus(500);
    });
}); //end POST new job

router.get('/', (req, res) => {
    Job.find({})
    .then(foundJobs => {
        console.log('data found', foundJobs);
        res.send(foundJobs);
    })
    .catch(error => {
        console.log('Error finding data from database: ', error);
        res.sendStatus(500);
    });
}) // end GET jobs


module.exports = router;