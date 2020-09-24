import React from 'react';
import "./GroupName.scss"

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