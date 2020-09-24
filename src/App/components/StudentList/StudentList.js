import React, { Component } from 'react';
import './StudentList.scss';
import { connect } from 'react-redux';
import Student from './Student/Student';
import { getTrainees } from '../../../actions';

class StudentList extends Component {

  componentDidMount() {
    this.props.handleGetTrainees();
  }

  render() {

    const { data, isFetching } = this.props.trainees;

    return (
      <div className="student-list-container">
        <h1>学员列表</h1>
        { isFetching ? (
            <p>Loading...</p>
          ) : (
            <section className="student-list">
              {data.map((item) => (
                <Student
                  studentId={item.id}
                  studentName={item.name}
                  key={item.id}
                />
              ))}
              <input type="text" placeholder="+ 添加学员" />
            </section>)
        }
      </div>
    );
  }
}

const mapStateToProps = ({ trainees }) => ({
  trainees
});

const mapDispatchToProps = dispatch => ({
  handleGetTrainees() {
    dispatch(getTrainees());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
