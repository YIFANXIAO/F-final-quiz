import { combineReducers } from 'redux';
import { trainees } from './trainee';
import { groups } from './group';
import { trainers } from './trainer';

const reducers = combineReducers({
  trainees,
  groups,
  trainers,
});

export default reducers;
