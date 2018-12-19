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
    dateAdded: { type: Date, required: true },
    followUp: { type: Boolean, required: true, default: false },
    jobNotes: { type: String }
})

const Job = mongoose.model('job', jobSchema);

//DB Requests
router.post('/', (req, res) => {
    let dataFromClient = req.body;
    // create a new job listing to which the user applied
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
    // finds all the jobs in the database
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

router.delete('/', (req, res) => {
    let jobID = req.query._id;
    // delete the job specific to that particular ID
    Job.findOneAndDelete({ _id: jobID })
        .then(() => {
            console.log('Success making DELETE');
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error making DELETE: ', error);
            res.sendStatus(500);
        });
}) // end DELETE job

router.put('/', (req, res) => {
    let jobID = req.body._id;
    // ONLY update the specific job's "followUp" boolean value to "true"
    Job.findOneAndUpdate({ _id: jobID }, { $set: { followUp: true } })
        .then(() => {
            console.log('Success making UPDATE');
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error making UPDATE: ', error);
            res.sendStatus(500);
        });
}) // end UPDATE follow up

module.exports = router;