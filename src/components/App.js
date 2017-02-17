import React, { Component } from 'react';
import './App.css';
import UserIncomeForm from '../containers/user-income-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <UserIncomeForm />
      </div>
    );
  }
}

export default App;
