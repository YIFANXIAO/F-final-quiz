import React, { Component } from 'react';
import './App.scss';
import GroupList from './components/GroupList/GroupList';
import TraineeList from './components/TraineeList/TraineeList';
import TrainerList from './components/TrainerList/TrainerList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/*  TODO feedback: 这里可以再划分出一个home page,把这个三个组件作为它的父组件*/}
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
