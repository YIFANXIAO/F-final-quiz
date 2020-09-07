import React, { Component } from 'react';
import './StudentList.scss';
import Student from './Student/Student';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList = () => {
    fetch('http://localhost:8080/student-list', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ studentList: data });
      });
  };

  render() {
    return (
      <div className="student-list-container">
        <h1>学员列表</h1>
        <section className="student-list">
          {this.state.studentList.map((item) => (
            <Student
              studentId={this.state.studentList.indexOf(item) + 1}
              studentName={item.studentName}
              key={item.studentName}
            />
          ))}
          <input type="text" placeholder="+ 添加学员" />
        </section>
      </div>
    );
  }
}

export default StudentList;
