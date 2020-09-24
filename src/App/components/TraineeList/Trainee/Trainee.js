import React, { Component } from 'react';
import './Trainee.scss';

class Trainee extends Component {
  render() {
    return (
      <span className="student">
        {this.props.studentId}.{this.props.studentName}
      </span>
    );
  }
}

export default Trainee;
