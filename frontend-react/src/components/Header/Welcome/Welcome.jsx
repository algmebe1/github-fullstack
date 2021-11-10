import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import img_profile_white from "../../../images/HeaderIcons/profile_white.svg";

function Welcome({ user }) {
  return (
    <div className="welcome-elements__container">
      <p className="welcome__text">
        Welcome back{" "}
        {
          <Link className="profile__link" to={"../../profile"}>
            {user?.login}
          </Link>
        }
        !
      </p>
      <Link className="profile__link" to={"../../profile"}>
        <img
          className="welcome__img"
          src={img_profile_white}
          alt="profile-icon"
        />
      </Link>
    </div>
  );
}

function mapStateToProps({ userReducer }) {
  return {
    user: userReducer.user,
  };
}

export default connect(mapStateToProps)(Welcome);
