import React, { Component } from 'react';

class AddJobForm extends Component {

    state = {
        jobToAdd: {
            company: '',
            title: '',
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
        console.log(this.state.jobToAdd);
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

export default AddJobForm;