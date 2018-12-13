import React, { Component } from 'react';
import './App.css';
import Board from './Board';



class HelloMF extends React.Component {

  render() {
    return (
      <div className="container2">
        <TopMenu />
        <GameSelect/>
        <Board />
      </div>
      
    );
  }
}

class TopMenu extends React.Component {
  render() {
    return (
      <div>
        <h1>Chose a number of cards to play</h1>
      </div>
    )
  }
}

class GameSelect extends React.Component {
  render() {
    return (
      <div className="box2">
        <select name="gameType">
          <option>4 x 4</option>
          <option>8 x 8</option>
        </select> 
      </div>
    )
  }

}

export default HelloMF;
