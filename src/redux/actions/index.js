//src/redux/actions/index.js

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

const addToFavourite = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });
const removeFromFavourite = () => ({ type: REMOVE_FROM_FAVOURITE });

export const SET_QUERY = "SET_QUERY";
export const CLEAR_QUERY = "CLEAR_QUERY";

const setQuery = (search) => ({ type: SET_QUERY, payload: search });
const clearQuery = () => ({ type: CLEAR_QUERY });


export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const fetchData = () => {
  return async (dispatch, event) => {
    event.preventDefault;
    dispatch(fetchDataRequest());
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=")
    }
  }
}