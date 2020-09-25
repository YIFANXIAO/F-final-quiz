import React from 'react';
import InfoButton from '../../Common/InfoButton/InfoButton';
import GroupName from './GroupName/GroupName';
import GroupTrainers from './GroupTrainers/GroupTrainers';
import "./GroupFrame.scss"
//TODO feedback: 组件的抽象做得好，但是组件的命名可以简单点，就叫Group或者GroupItem就行了
class GroupFrame extends React.Component {
  render() {
    return (
      <div className="single-group">
        <div className="single-group-header">
          <GroupName groupName={this.props.groupName} />
          <GroupTrainers trainers={this.props.groupTrainers} />
        </div>
        <div className="group-trainees">
          {this.props.gooupTrainees.map((item) => (
            <InfoButton
              entityId={item.id}
              entityName={item.name}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

GroupFrame.propTypes = {};

export default GroupFrame;