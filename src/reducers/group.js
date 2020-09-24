import { GET_GROUPS_RECEIVE, GET_GROUPS_REQUEST } from '../actions';

const groups = (
  state = {
    isFetching: false,
    data: []
  },
  action)=> {
  if (action.type === GET_GROUPS_REQUEST) {
    return { ...state, isFetching: true };
  }
  if (action.type === GET_GROUPS_RECEIVE) {
    return { ...state, isFetching: false, data: action.payload };
  }
  return state;
};

export { groups };
