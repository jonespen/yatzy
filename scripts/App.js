'use strict';

import React from 'react';
import Categories from './Categories/Categories';
import Dice from './components/Dice/Dice';
import Board from './components/Board/Board';

require('./App.scss');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dice: props.initialDice,
      players: ['Computer', 'JK']
    };
  }
  roll() {
    var dice = this.state.dice;
    dice.forEach((die, i)=>{
      setTimeout(function () {
        dice[i] = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
        this.setState({ dice });
      }.bind(this), Math.floor(Math.random() * (1 - 1000 + 1)) + 1000); // wait between 1ms and 1000ms before setting value
    });
  }
  render() {
    return (
      <div className="App">
        <Board players={this.state.players} />
        <Dice dice={this.state.dice} />
        <button onClick={this.roll.bind(this)}>Roll</button>
      </div>
    );
  }
}

App.propTypes = { initialDice: React.PropTypes.array };
App.defaultProps = { initialDice: [1,2,3,4,5,6] };
