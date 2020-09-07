import React, { Component } from 'react';
import './StudentList.scss';

class StudentList extends Component {
  render() {
    return (
      <div className="student-list-container">
        <h1>学员列表</h1>
        <input type="text" placeholder="+ 添加学员" />
      </div>
    );
  }
}

export default StudentList;
