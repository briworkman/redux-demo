import axios from 'axios';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const START_ADDING = 'START_ADDING';
export const WIZARD_ADDED = 'WIZARD_ADDED';
export const WIZARD_FAIL = 'WIZARD_FAIL';

export const fetchWizards = () => (dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .get('http://localhost:5000')
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addWizard = (wizard) => (dispatch) => {
  dispatch({ type: START_ADDING });
  const url = 'http://localhost:5000';
  axios
    .post(url, wizard)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: WIZARD_ADDED, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: WIZARD_FAIL, payload: error.response });
    });
};
