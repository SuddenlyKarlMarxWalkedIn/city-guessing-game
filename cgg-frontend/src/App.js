import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Ashley and Dillon's City Guessing Game
      </header>
          <div className="StartButton"><Button>Start Game</Button></div>
      
      <header>High scores</header>
      <table border="1">
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
        <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
      
      </table>
      </div>
  );
}

export default App;
