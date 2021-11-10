import React, { useState } from "react";
import "./Filter.css";
import { connect } from "react-redux";
import { filterRepo } from "../../../redux/actions/repoActions";
import img_search from "../../../images/HeaderIcons/search_white.svg";

function Filter({ dispatch, repoList }) {
  const [search, setSearch] = useState("");

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    dispatch(filterRepo(search, repoList));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(filterRepo(search, repoList));
    }
  };

  return (
    <div className="filter-elements__container">
      <div className="filter__input">
        <label for="filter" className="filter__label--hidden"></label>
        <input
          type="text"
          placeholder="Search"
          name="search"
          className="filter__input--search"
          id="search"
          value={search}
          onChange={handleFilter}
          onKeyDown={handleKeyDown}
        />
      </div>

      <img
        className="filter__img"
        src={img_search}
        alt="filter-icon"
        onClick={handleSearch}
      />
    </div>
  );
}

function mapStateToProps({ repoListReducer }) {
  return {
    repoList: repoListReducer?.repoList,
  };
}

export default connect(mapStateToProps)(Filter);
