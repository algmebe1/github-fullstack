import React from "react";
import "./ErrorState.css";
import img_github_svg from "../../images/GitHubLogos/git-error.svg";
import ReloadRepoListButton from "../ReloadRepoListButton/ReloadRepoListButton";

function ErrorState({errorMessage}) {
  return (
    <div className="error-state__container">
      <img src={img_github_svg} alt="github-logo-error-state" />
      <p>Error: {errorMessage}! Try again...</p>
      <ReloadRepoListButton />
    </div>
  );
}
export default ErrorState;