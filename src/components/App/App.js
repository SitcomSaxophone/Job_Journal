import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import AddJobForm from '../AddJobForm/AddJobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AddJobForm/>
      </div>
    );
  }
}

export default App;
