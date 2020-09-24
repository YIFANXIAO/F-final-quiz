import React from 'react';
import InfoButton from '../../../Common/InfoButton/InfoButton';

class GroupTrainers extends React.Component {

  render() {
    return (
      <div>
        {this.props.trainers.map((item) => (
          <InfoButton
            entityId={item.id}
            entityName={item.name}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default GroupTrainers;