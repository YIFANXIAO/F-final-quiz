import { GET_TRAINERS_RECEIVE, GET_TRAINERS_REQUEST } from '../actions';

const trainers = (
  state = {
    isFetching: false,
    data: []
  },
  action)=> {
  if (action.type === GET_TRAINERS_REQUEST) {
    return { ...state, isFetching: true };
  }
  if (action.type === GET_TRAINERS_RECEIVE) {
    return { ...state, isFetching: false, data: action.payload };
  }
  return state;
};

export { trainers };
