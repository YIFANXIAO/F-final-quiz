import React, { Component } from 'react';
import './GroupList.scss';

class GroupList extends Component {
  render() {
    return (
      <div className="group-list-container">
        <h1>分组列表</h1>
        <button type="submit">分组学员</button>
      </div>
    );
  }
}

export default GroupList;
