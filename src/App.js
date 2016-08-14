import React from 'react';
import logo from './logo.svg';
import Board from './components/board'
import './App.css';

var App = React.createClass({
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
})

export default App;
