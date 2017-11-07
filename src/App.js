import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import containers from './containers';
const { Welcome, CurrentGame, EndGame } = containers;

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentGame />
      </div>
    );
  }
}

export default App;
