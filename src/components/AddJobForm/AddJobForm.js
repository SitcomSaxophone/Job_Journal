import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddJobForm extends Component {

    state = {
        jobToAdd: {
            company: '',
            title: '',
            dateAdded: new Date(),
        }
    }

    handleChangeFor = property => event => {
        this.setState({
            jobToAdd: {
                ...this.state.jobToAdd,
                [property]: event.target.value,
            },
        });
    }

    handleAddNewJob = event => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_JOB', payload: this.state.jobToAdd});
        this.setState({
            jobToAdd: {
                company: '',
                title: '', 
                dateAdded: new Date(),
            },
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddNewJob}>
                    <input 
                        placeholder="Company Name" 
                        value={this.state.jobToAdd.company}
                        onChange={this.handleChangeFor('company')}
                    />
                    <input 
                        placeholder="Job Title"
                        value={this.state.jobToAdd.title}
                        onChange={this.handleChangeFor('title')}  
                    />
                    <input type="submit" name="Submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs,
})

export default connect(mapStateToProps)(AddJobForm);