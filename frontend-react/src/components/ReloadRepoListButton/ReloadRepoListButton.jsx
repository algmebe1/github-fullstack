import React from "react";
import {Link} from "react-router-dom";
import "./ReloadRepoListButton.css";
import img_replay_white_svg from "../../images/ReloadRepoListButton/replay_white.svg";

function ReloadRepoListButton(){
    return (
        <Link className="reload-repo-list-button__button" to={"../list"}>
            <img src={img_replay_white_svg} alt="reload-repo-list-white-icon" className="reload-repo-list-button__button--icon" />
        </Link>
    );
}
export default ReloadRepoListButton;