import React from "react";
import "./FilteredEmpty.css";
import img_github_svg from "../../images/GitHubLogos/git-empty.svg";
import CreateRepoButton from "../CreateRepoButton/CreateRepoButton";

function FilteredEmpty(){
    return (
      <div className="filtered-empty__container">
        <img src={img_github_svg} alt="github-logo-filtered-empty" />
        <p>You don't have any repository with this name. You can try another search or create a new repository</p>
        <CreateRepoButton/>
      </div>
    );
}
export default FilteredEmpty;