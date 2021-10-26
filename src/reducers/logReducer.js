import { GET_LOGS, LOGS_ERROR, SET_LOADING } from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case LOGS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
