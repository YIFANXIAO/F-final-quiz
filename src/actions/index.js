export const GET_TRAINEES_REQUEST = 'GET_TRAINEES_REQUEST';
export const GET_TRAINEES_RECEIVE = 'GET_TRAINEES_RECEIVE';
export const GET_GROUPS_REQUEST = 'GET_GROUPS_REQUEST';
export const GET_GROUPS_RECEIVE = 'GET_GROUPS_RECEIVE';
export const GET_TRAINERS_REQUEST = 'GET_TRAINERS_REQUEST';
export const GET_TRAINERS_RECEIVE = 'GET_TRAINERS_RECEIVE';
export const PATCH_GROUP_NAME_REQUEST = 'PATCH_GROUP_NAME_REQUEST';
export const PATCH_GROUP_NAME_RECEIVE = 'PATCH_GROUP_NAME_RECEIVE';
export const CREATE_TRAINER_REQUEST = 'CREATE_TRAINER_REQUEST';
export const CREATE_TRAINER_RECEIVE = 'CREATE_TRAINER_RECEIVE';

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

const getTrainersRequest = () => {
  return {
    type: GET_TRAINERS_REQUEST,
  };
};

const getTrainersReceive = info => {
  return {
    type: GET_TRAINERS_RECEIVE,
    payload: info
  };
};

export const getTrainers = () => dispatch => {
  dispatch(getTrainersRequest());
  fetch('http://localhost:8080/trainers?grouped=false', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getTrainersReceive(data));
    });
}

export const getGroups = () => dispatch => {
  dispatch(getGroupsRequest());
  fetch('http://localhost:8080/groups/auto-grouping', { method: 'POST' })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getGroupsReceive(data));
    })
    .then(() => {
      dispatch(getTrainers());
      dispatch(getTrainees());
    });
}

const patchGroupNameRequest = () => {
  return {
    type: PATCH_GROUP_NAME_REQUEST,
  };
};

const patchGroupNameReceive = info => {
  return {
    type: PATCH_GROUP_NAME_RECEIVE,
    payload: info
  };
};

export const patchGroupName = (name) => dispatch => {
  dispatch(patchGroupNameRequest());
  fetch('http://localhost:8080/trainers?grouped=false', { method: 'GET',
    body: JSON.stringify({ name }),
    headers: {
      'content-type': 'application/json'
    }})
    .then((res) => res.json())
    .then((data) => {
      dispatch(patchGroupNameReceive(data));
    });
}

const CreateTrainerRequest = () => {
  return {
    type: CREATE_TRAINER_REQUEST,
  };
};

const CreateTrainerReceive = info => {
  return {
    type: CREATE_TRAINER_RECEIVE,
    payload: info
  };
};

export const createTrainer = (name) => dispatch => {
  dispatch(CreateTrainerRequest());
  fetch('http://localhost:8080/trainers', { method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      'content-type': 'application/json'
    }})
    .then((res) => res.json())
    .then((data) => {
      dispatch(CreateTrainerReceive(data));
    }).then(() => {
      dispatch(getTrainers());
      dispatch(getTrainees());
  });
}

