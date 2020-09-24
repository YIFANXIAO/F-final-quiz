import React, { Component } from 'react';
import './TraineeList.scss';
import { connect } from 'react-redux';
import InfoButton from '../Common/InfoButton/InfoButton';
import { getTrainees } from '../../../actions';
import AddEntityButton from '../Common/AddEntityButton/AddEntityButton';

class TraineeList extends Component {

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
                <InfoButton
                  entityId={item.id}
                  entityName={item.name}
                  key={item.id}
                />
              ))}
              <AddEntityButton placeHolderName="添加学员"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TraineeList);
