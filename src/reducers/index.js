import { combineReducers } from 'redux';
import { trainees } from './trainee';
import { groups } from './group';

const reducers = combineReducers({
  trainees,
  groups,
});

export default reducers;
