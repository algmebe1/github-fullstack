import actionTypes from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newState = { ...state, user: action.userItem };
      break;
    case actionTypes.RESET_USER:
      newState = { ...state, user: action.payload };
      break;
    case actionTypes.LOAD_TOKEN:
      newState = { ...state, token: action.pat };
      break;
    case actionTypes.LOAD_ERROR:
      newState = { ...state, error: action.error };
      break;
    case actionTypes.USER_NOTFOUND:
      newState = { ...state, error: action.notFound };
      break;
    case actionTypes.RESET_ERROR:
      newState = { ...state, error: action.payload };
      break;
    default:
      newState = { ...state };
  }
  return newState;
}
