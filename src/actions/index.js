export const GET_TRAINEES_REQUEST = 'GET_TRAINEES_REQUEST';
export const GET_TRAINEES_RECEIVE = 'GET_TRAINEES_RECEIVE';

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
  dispatch(getTraineesRequest())
  fetch('http://localhost:8080/trainees?grouped=false', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getTraineesReceive(data));
    });
}

