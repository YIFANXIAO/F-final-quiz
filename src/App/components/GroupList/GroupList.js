import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GroupList.scss';
import { getGroups } from '../../../actions';
import GroupFrame from './Group/GroupFrame';

class GroupList extends Component {
  render() {
    const { data, isFetching } = this.props.groups;
    return (
      <div className="group-list-container">
        <header className="group-header">
          <h1>分组列表</h1>
          <button type="submit" onClick={this.props.handleGetGroups}>分组学员</button>
        </header>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <section className="student-list">
          {data.map((item) => (
            <GroupFrame
              groupName={item.name}
              groupTrainers={item.trainers}
              gooupTrainees={item.trainees}
              key={item.id}
            />
          ))}
          </section>)
        }

      </div>

    );
  }
}

const mapStateToProps = ({ groups }) => ({
  groups
});

const mapDispatchToProps = dispatch => ({
  handleGetGroups() {
    dispatch(getGroups());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
