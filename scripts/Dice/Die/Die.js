'use strict';

import React from 'react';

export default class Die extends React.Component {
  render() {
    var unicodeDice = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
    return (
      <div className="Die">
        {unicodeDice[this.props.value-1]}
      </div>
    );
  }
}
