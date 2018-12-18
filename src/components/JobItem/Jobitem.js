import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobItem extends Component {

    handleDeleteJob = jobToDelete => {
        console.log('clicked', jobToDelete);
    }

    render() {
        return (
            <>
                <li key={this.props.job._id}>
                    {this.props.job.company} {this.props.job.title} {this.props.job.dateAdded} 
                    <button onClick={() => this.handleDeleteJob(this.props.job._id)}>Remove Job</button>
                </li>
            </>
        )
    }
}

export default connect()(JobItem);