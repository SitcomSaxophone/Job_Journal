import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import AddJobForm from '../AddJobForm/AddJobForm';
import JobsList from '../JobsList/JobsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AddJobForm/>
        <JobsList/>
      </div>
    );
  }
}

export default App;
