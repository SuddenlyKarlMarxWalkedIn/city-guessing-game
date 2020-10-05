import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Ashley and Dillon's City Guessing Game
      </header>
          <div className="StartButton"><Button>Start Game</Button></div>
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
      
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
