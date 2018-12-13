import React, { Component } from 'react';
import './App.css';

class Board extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      cards: Array(4).fill(Card),
    };
  }
  
  handleClick(i) {
    //if there is another card turned over then
    //i'll need to see if they match
  }

  render() {
    return (

    <div className="container"> 
      {this.state.cards}
    </div>
    
    )
  }
}



class Card extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      id: props.id,
      cardType: props.cardType,
      text: props.text,
    }
  }
  

  render() {
    return (
      <div className="box1" onClick="{() => this.sayHi()}">
        {this.state.text}
      </div>
    );
  }

  sayHi() {
    this.setState = {
      text: "clicked",
    }

  }

}

export default Board;
