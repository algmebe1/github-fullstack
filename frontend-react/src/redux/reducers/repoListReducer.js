import actionTypes from "../actions/actionTypes";

export default function repoListReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case actionTypes.LOAD_REPOLIST:
      newState = { ...state, repoList: action.repoList };
      break;
    case actionTypes.LOAD_FILTER_REPOLIST:
      newState = { ...state, filteredRepoList: action.filteredRepoList };
      break;
    case actionTypes.RESET_FILTERED_REPOLIST:
      newState = { ...state, filteredRepoList: action.payload };
      break;
    case actionTypes.LOAD_ERROR:
      newState = { ...state, error: action.error };
      break;
    case actionTypes.CREATE_REPO_ERROR:
      newState = { ...state, error: action.createRepoError };
      break;
    case actionTypes.RESET_ERROR:
      newState = { ...state, error: action.payload };
      break;
    case actionTypes.REQUEST_SUCCESS:
      newState = { ...state, message: action.requestSuccess };
      break;
    case actionTypes.RESET_MESSAGE:
      newState = { ...state, message: action.payload };
      break;
    default:
      newState = { ...state };
  }
  return newState;
}
