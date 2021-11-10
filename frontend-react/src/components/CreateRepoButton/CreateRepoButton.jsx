import React from "react";
import {Link} from "react-router-dom";
import "./CreateRepoButton.css";
import img_add_white_svg from "../../images/CreateRepoButton/add_white.svg";

function CreateRepoButton(){
    return (
        <Link className="create-repo-button__button" to={"../createrepo"}>
            <img src={img_add_white_svg} alt="create-repo-white-icon" className="create-repo-button__button--icon" />
        </Link>
    );
}
export default CreateRepoButton;