import React, { Component } from 'react';
import './InfoButton.scss';

//TODO button: 抽象做得很到位，但是组件的命名不能让人一眼看出组件的职责
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
