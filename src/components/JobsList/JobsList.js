import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class JobsList extends Component {

    state = {
        jobs: [],
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/jobs'
        }).then(response => {
            this.setState({
                jobs: response.data,
            });
        })
        .catch(error => {
            alert('Error making request to server: ', error);
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.jobs.map(job => (
                        <li key={job._id}>{job.company} {job.title} {job.dateAdded}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    jobs: state.jobs,
})
export default connect(mapStateToProps)(JobsList);