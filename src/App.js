import React, { Component } from 'react';
import SwitchButton from './components/SwitchButton.js';
import './App.css';
import './components/reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwitchButton/>
      </div>
    );
  }
}

export default App;
