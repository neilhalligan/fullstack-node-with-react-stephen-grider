import { FETCH_USER, ADD_SURVEY } from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const sendSurvey = (survey, history) => async dispatch => {
  // save survey to back end and send
  const res = await axios.post('/api/surveys', survey);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });

  // dispatch({ type: ADD_SURVEY, payload: res.data });
};
