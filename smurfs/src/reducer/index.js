import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  WIZARD_ADDED,
  WIZARD_FAIL,
  START_ADDING,
} from '../actions';

const initialState = {
  Wizards: [],
  isFetching: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        Wizards: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_ADDING:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case WIZARD_ADDED:
      return {
        ...state,
        isFetching: false,
        error: '',
        Wizards: action.payload,
      };
    case WIZARD_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
