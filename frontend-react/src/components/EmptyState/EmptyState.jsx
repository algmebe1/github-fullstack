import React from "react";
import "./EmptyState.css";
import img_github_svg from "../../images/GitHubLogos/git-empty.svg";
import CreateRepoButton from "../CreateRepoButton/CreateRepoButton";

function EmptyState(){
    return (
      <div className="empty-state__container">
        <img src={img_github_svg} alt="github-logo-empty-state" />
        <p>You don't have any repository. You can create one!</p>
        <CreateRepoButton/>
      </div>
    );
}
export default EmptyState;