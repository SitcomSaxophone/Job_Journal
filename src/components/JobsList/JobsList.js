import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobsList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_JOBS'});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.jobs.map(job => (
                        <li key={job._id}>{job.company} {job.title} {job.dateAdded}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs,
});

export default connect(mapStateToProps)(JobsList);