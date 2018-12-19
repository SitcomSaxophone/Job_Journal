import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobItem extends Component {

    state = {
        addNotes: false,
    }

    handleDeleteJob = jobToDelete => () => {
        this.props.dispatch({ type: 'DELETE_JOB', payload: jobToDelete });
    }

    handleJobChecked = jobToCheckOff => async event => {
        this.props.dispatch({ type: 'UPDATE_FOLLOW_UP', payload: jobToCheckOff })
    }

    handleToggleTextArea = textAreaToShow => () => {
        this.setState({
            addNotes: true,
        });
    }

    handleAddNotes = event => {
        event.preventDefault();
        this.setState({
            addNotes: false,
        });
    }

    render() {
        return (
            <div>
                <li key={this.props.job._id}>
                    <b>{this.props.job.company}</b>
                    <br />
                    {this.props.job.title}
                    <br />
                    {this.props.job.dateAdded}
                    <br />
                    <button onClick={this.handleDeleteJob(this.props.job)}>Remove Job</button>

                    {!this.props.job.followUp && <>
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            onChange={this.handleJobChecked(this.props.job)}
                            name="CheckBox"
                        />
                        <label htmlFor="CheckBox">Follow Up Sent?</label>
                    </>}
                    <br />
                    {/* render the checkbox */}
                    {!this.state.addNotes ? (
                        <>
                            <input 
                                type="checkbox" 
                                defaultChecked={false} 
                                name="notes" 
                                onChange={this.handleToggleTextArea(this.props.job)}
                            />
                            <label htmlFor="notes">Add Notes</label>
                        </>
                    ) : ( 
                    <>
                    <form onSubmit={this.handleAddNotes}>
                        <textarea />
                        <input type="submit" value="Add Notes"/>
                    </form>
                    </>)}
                </li>
                <br />
            </div>
        )
    }
}

export default connect()(JobItem);