export const GET_TRAINEES_REQUEST = 'GET_TRAINEES_REQUEST';
export const GET_TRAINEES_RECEIVE = 'GET_TRAINEES_RECEIVE';
export const GET_GROUPS_REQUEST = 'GET_GROUPS_REQUEST';
export const GET_GROUPS_RECEIVE = 'GET_GROUPS_RECEIVE';

const getTraineesRequest = () => {
  return {
    type: GET_TRAINEES_REQUEST,
  };
};

const getTraineesReceive = info => {
  return {
    type: GET_TRAINEES_RECEIVE,
    payload: info
  };
};

export const getTrainees = () => dispatch => {
  dispatch(getTraineesRequest());
  fetch('http://localhost:8080/trainees?grouped=false', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getTraineesReceive(data));
    });
}

const getGroupsRequest = () => {
  return {
    type: GET_GROUPS_REQUEST,
  };
};

const getGroupsReceive = info => {
  return {
    type: GET_GROUPS_RECEIVE,
    payload: info
  };
};

export const getGroups = () => dispatch => {
  dispatch(getGroupsRequest());
  fetch('http://localhost:8080/groups/auto-grouping', { method: 'POST' })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getGroupsReceive(data));
    });
}

