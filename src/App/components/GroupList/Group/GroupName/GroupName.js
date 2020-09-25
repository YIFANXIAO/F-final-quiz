import React from 'react';
import "./GroupName.scss"

//TODO feedback: 这一层组件划分就粒度太细了点，有点过渡设计了
class GroupName extends React.Component {
  render() {
    return (
      <div className="group-name-container">
        {this.props.groupName}
      </div>
    );
  }
}

GroupName.propTypes = {};

export default GroupName;