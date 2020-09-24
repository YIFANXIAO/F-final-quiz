import React from 'react';
import Trainee from '../../../TraineeList/Trainee/Trainee';

class GroupTrainers extends React.Component {

  render() {
    return (
      <div>
        {this.props.trainers.map((item) => (
          <Trainee
            studentId={item.id}
            studentName={item.name}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default GroupTrainers;