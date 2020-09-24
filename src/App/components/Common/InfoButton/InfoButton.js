import React, { Component } from 'react';
import './InfoButton.scss';

class InfoButton extends Component {
  render() {
    return (
      <span className="student">
        {this.props.entityId}.{this.props.entityName}
      </span>
    );
  }
}

export default InfoButton;
