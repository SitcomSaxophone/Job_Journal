import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobItem from '../JobItem/JobItem';

class JobsList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_JOBS' });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.jobs.map(job => (
                        <JobItem
                            job={job}
                            key={job._id}
                        />
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