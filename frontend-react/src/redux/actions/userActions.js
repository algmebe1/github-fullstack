import axios from "axios";
import actionTypes from "./actionTypes";
import messageTypes from "./messageTypes";

function loadUserSuccess(userItem) {
  return {
    type: actionTypes.LOAD_USER,
    userItem,
  };
}

function loadTokenSuccess(pat) {
  return {
    type: actionTypes.LOAD_TOKEN,
    pat,
  };
}

function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

function userNotFound(notFound) {
  return {
    type: actionTypes.USER_NOTFOUND,
    notFound,
  };
}

export function resetUser() {
  return {
    type: actionTypes.RESET_USER,
    payload: null,
  };
}

export function resetError() {
  return {
    type: actionTypes.RESET_ERROR,
    payload: null,
  };
}

export function loadUser(pat, username) {
  return async (dispatch) => {
    const endpoint = `http://localhost:8080/?pat=${pat}&username=${username}`;
    try {
      dispatch(loadTokenSuccess(pat));
      const { data } = await axios.get(endpoint);
      if (!data) {
        dispatch(userNotFound(messageTypes.USER_NOT_FOUND));
      } else {
        dispatch(loadUserSuccess(data));
      }
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
