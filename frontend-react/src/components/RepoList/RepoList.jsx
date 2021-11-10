import React, { useEffect, useState } from "react";
import "./RepoList.css";
import { connect } from "react-redux";
import {
  loadRepoList,
  resetFilteredRepoList,
} from "../../redux/actions/repoActions";
import RepoItem from "./RepoItem/RepoItem";
import CreateRepoButton from "../CreateRepoButton/CreateRepoButton";
import Header from "../Header/Header";
import EmptyState from "../EmptyState/EmptyState";
import FilteredEmpty from "../FilteredEmpty/FilteredEmpty";


function RepoList({ dispatch, repoList, filteredRepoList, token }) {
  
  const [loaded, setLoading] = useState(false);


  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
    dispatch(loadRepoList(token));
  });

  useEffect(() => {
    return () => {
      dispatch(resetFilteredRepoList());
    };
  }, []);

  useEffect(() => {
    dispatch(loadRepoList(token));
  }, [repoList?.length]);

  return (
    <div className="repoList__container">
      <Header header_title="Repositories" welcome_needed="true" filter_needed="true" />
      {loaded ? (
        repoList?.length === 0 ? (
          <EmptyState />
        ) : filteredRepoList?.length ? (
          filteredRepoList.map((element) => {
            return (
              <RepoItem
                name={element.name}
                updated_at={element.updated_at}
                language={element.language}
                description={element.description}
                open_issues={element.open_issues}
                stargazers_count={element.stargazers_count}
              />
            );
          })
        ) : filteredRepoList?.length === 0 ? (
          <FilteredEmpty />
        ) : (
          repoList?.map((element) => {
            return (
              <RepoItem
                name={element.name}
                updated_at={element.updated_at}
                language={element.language}
                description={element.description}
                open_issues={element.open_issues}
                stargazers_count={element.stargazers_count}
              />
            );
          })
        )
      ) : (
        <img
          src="https://i.imgur.com/llF5iyg.gif"
          alt="loading-animation"
          className="gif__loading--repolist"
        />
      )}

      <CreateRepoButton />
    </div>
  );
}

function mapStateToProps({ repoListReducer, userReducer }) {
  return {
    repoList: repoListReducer?.repoList,
    filteredRepoList: repoListReducer?.filteredRepoList,
    token: userReducer.token,
  };
}

export default connect(mapStateToProps)(RepoList);
