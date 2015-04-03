'use strict';

import React from 'react';
import Die from './Die/Die';

export default class Dice extends React.Component {
  render() {
    var dice = this.props.dice.map((die, i)=>{
      return <Die value={die} key={i} />
    });
    return (
      <div className="Dice">
        {dice}
      </div>
    );
  }
}
