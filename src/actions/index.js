export const GET_TRAINEES_REQUEST = 'GET_TRAINEES_REQUEST';
export const GET_TRAINEES_RECEIVE = 'GET_TRAINEES_RECEIVE';

export const getTraineesRequest = () => {
  return {
    type: GET_TRAINEES_REQUEST,
  };
};

export const getTraineesReceive = info => {
  return {
    type: GET_TRAINEES_RECEIVE,
    payload: info
  };
};

