import React from 'react';
import Student from '../../../StudentList/Student/Student';

class GroupTrainers extends React.Component {

  render() {
    return (
      <div>
        {this.props.trainers.map((item) => (
          <Student
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