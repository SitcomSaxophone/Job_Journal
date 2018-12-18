import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobItem extends Component {

    handleDeleteJob = jobToDelete => () => {
        this.props.dispatch({ type: 'DELETE_JOB', payload: jobToDelete });
    }

    handleJobChecked = jobToCheckOff => event => {
        console.log(event.target.checked, jobToCheckOff);
    }

    render() {
        return (
            <div>
                <li key={this.props.job._id}>
                    <b>{this.props.job.company}</b> 
                    <br/> 
                    {this.props.job.title} 
                    <br/> 
                    {this.props.job.dateAdded}
                    <br/>
                    <button onClick={this.handleDeleteJob(this.props.job)}>Remove Job</button>
                    <input type="checkbox" defaultChecked={false} onChange={this.handleJobChecked(this.props.job)} name="CheckBox"/>
                    <label htmlFor="CheckBox">Follow Up Sent?</label>
                </li>
                <br/>
            </div>
        )
    }
}

export default connect()(JobItem);