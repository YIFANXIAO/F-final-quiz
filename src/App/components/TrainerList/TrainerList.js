import React from 'react';
import { connect } from 'react-redux';
import "./TrainerList.scss"
import { getTrainers } from '../../../actions';
import Trainee from '../TraineeList/Trainee/Trainee';

class TrainerList extends React.Component {


  componentDidMount() {
    this.props.handleGetTrainers();
  }

  render() {
    const { data, isFetching } = this.props.trainers;
    return (
      <div className="trainer-list-container">
        <h1>讲师列表</h1>
        { isFetching ? (
          <p>Loading...</p>
        ) : (
          <section className="trainer-list">
            {data.map((item) => (
              <Trainee
                studentId={item.id}
                studentName={item.name}
                key={item.id}
              />
            ))}
          </section>)
        }
      </div>
    );
  }
}

const mapStateToProps = ({ trainers }) => ({
  trainers
});

const mapDispatchToProps = dispatch => ({
  handleGetTrainers() {
    dispatch(getTrainers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainerList);
