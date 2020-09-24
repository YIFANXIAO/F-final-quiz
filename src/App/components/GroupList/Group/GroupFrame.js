import React from 'react';

class GroupFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div>
        <span className="student">
          {this.props.groupName}
        </span>
      </div>
    );
  }
}

GroupFrame.propTypes = {};

export default GroupFrame;