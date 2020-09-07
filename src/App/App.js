import React, { Component } from 'react';
import './App.scss';
import GroupList from './components/GroupList/GroupList';
import StudentList from './components/StudentList/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
