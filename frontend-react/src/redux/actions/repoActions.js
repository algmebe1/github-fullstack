import axios from "axios";
import actionTypes from "./actionTypes";
import messageTypes from "./messageTypes";

function loadRepoListSuccess(repoList) {
  return {
    type: actionTypes.LOAD_REPOLIST,
    repoList,
  };
}

function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

function createRepoError(createRepoError) {
  return {
    type: actionTypes.CREATE_REPO_ERROR,
    createRepoError,
  };
}

export function resetError() {
  return {
    type: actionTypes.RESET_ERROR,
    payload: null,
  };
}

export function resetMessage() {
  return {
    type: actionTypes.RESET_MESSAGE,
    payload: null,
  };
}

function showRequestSuccess(requestSuccess) {
  return {
    type: actionTypes.REQUEST_SUCCESS,
    requestSuccess,
  };
}

export function filterRepo(searchKeyword, repoList) {
  const filteredRepoList = repoList.filter((element) =>
    element.name.includes(searchKeyword)
  );
  return {
    type: actionTypes.LOAD_FILTER_REPOLIST,
    filteredRepoList,
  };
}

export function resetFilteredRepoList() {
  return {
    type: actionTypes.RESET_FILTERED_REPOLIST,
    payload: null,
  };
}

export function loadRepoList(pat) {
  return async (dispatch) => {
    const endpoint = `http://localhost:8080/repos/?pat=${pat}`;
    try {
      const { data } = await axios.get(endpoint);

      dispatch(loadRepoListSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function createRepo(
  name,
  description,
  home,
  issues,
  projects,
  wiki,
  isPrivate,
  pat
) {
  const newRepo = {
    name: name,
    description: description,
    homepage: home,
    has_issues: issues,
    has_projects: projects,
    has_wiki: wiki,
    private: isPrivate,
  };
  return async (dispatch) => {
    const endpoint = `http://localhost:8080/create/repo/?pat=${pat}`;
    try {
      const { data } = await axios.post(endpoint, newRepo);
      if (data >= 500 && data <= 599) {
        dispatch(createRepoError(messageTypes.SERVER_ERROR));
      } else if (data >= 400 && data <= 499) {
        dispatch(createRepoError(messageTypes.ERROR_REQUEST));
      } else if (data >= 200 && data <= 299) {
        dispatch(showRequestSuccess(messageTypes.REQUEST_SUCCESS));
      }
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
