import { GET_TRAINEES_RECEIVE, GET_TRAINEES_REQUEST } from '../actions';

const trainees = (
  state = {
    isFetching: false,
    data: []
  },
  action)=> {
  if (action.type === GET_TRAINEES_REQUEST) {
    return { ...state, isFetching: true };
  }
  if (action.type === GET_TRAINEES_RECEIVE) {
    return { ...state, isFetching: false, data: action.payload };
  }
  return state;
};

export { trainees };
