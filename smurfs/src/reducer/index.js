import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, SMURF_ADDED, SMURF_FAIL, START_ADDING } from '../actions';

const initialState = {
	Smurfs     : [],
	isFetching : false,
	error      : '',
};

const reducer = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching : true,
				error      : '',
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isFetching : false,
				error      : '',
				Smurfs     : action.payload,
			};
		case FETCH_FAILURE:
			return {
				...state,
				error      : action.payload,
				isFetching : false,
			};
		case START_ADDING:
			return {
				...state,
				isFetching : true,
				error      : '',
			};
		case SMURF_ADDED:
			return {
				...state,
				isFetching : false,
				error      : '',
				Smurfs     : action.payload,
			};
		case SMURF_FAIL:
			return {
				...state,
				error      : action.payload,
				isFetching : false,
			};
		default:
			return state;
	}
};

export default reducer;
