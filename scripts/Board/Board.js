'use strict';

import React from 'react';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      over: props.initialDice,
      under: props.initialDice
    };
  }
  render() {
    var playerHeaderColumns = this.props.players.map((player)=>{
      return <th key={player}>{player}</th>
    });
    return (
      <table className="Board">
        <thead>
          <tr>
            <td></td>
            {playerHeaderColumns}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
          </tr>
        </tbody>
      </table>
    );
  }
}

Board.propTypes = { initialDice: React.PropTypes.array };
Board.defaultProps = { initialDice: [1,2,3,4,5,6] };
