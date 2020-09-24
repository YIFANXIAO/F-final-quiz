import React, { Component } from 'react';
import './GroupList.scss';

class GroupList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    }
  }

  handleGrouping = async () => {
    const response = await fetch('http://localhost:8080/groups/auto-grouping', { method: 'POST' });
    const data = await response.json();
    this.setState({ groups: data });
  }

  render() {
    return (
      <div className="group-list-container">
        <header className="group-header">
          <h1>分组列表</h1>
          <button type="submit" onClick={this.handleGrouping}>分组学员</button>
        </header>
        {/*{this.state.groups.map((item) => {*/}
        {/*  <GroupFrame*/}
        {/*    groupName={this.state.group.name}*/}
        {/*  ></GroupFrame>*/}
        {/*})}*/}
      </div>

    );
  }
}

export default GroupList;
