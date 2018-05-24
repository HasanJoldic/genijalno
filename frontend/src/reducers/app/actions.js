import axios from "axios";

import {
  LOADING,
  LOADING_SUCCESS,
  LOADING_FAIL,
  SELECT_MARKER,
  TOGGLE_SHOW_MARKERS
} from "./index.js";

export const load = () => {
  return {
    type: LOADING
  }
};

export const loadingSuccess = () => {
  return {
    type: LOADING_SUCCESS
  }
};

export const loadingFail = () => {
  return {
    type: LOADING_FAIL
  }
};

export const loadMarkers = () => {
  return async (dispatch, getState) => {
    axios({
      method: "get",
      url: "http://localhost:3000" + "/markers",
      responseType: "json"
    }).then(res => {
      dispatch({
        type: LOADING_SUCCESS,
        payload: {markers: res.data}
      })
    }).catch(error => {
      console.log(error);
    });
  };
};

export const selectMarker = (index) => ({
  type: SELECT_MARKER,
  payload: {index}
});

export const toggleShowMarkers = () => ({
  type: TOGGLE_SHOW_MARKERS
});