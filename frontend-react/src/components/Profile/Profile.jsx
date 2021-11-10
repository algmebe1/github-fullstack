import React from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { resetUser } from "../../redux/actions/userActions";
import Header from "../Header/Header";
import img_back from "../../images/HeaderIcons/arrow_back_white.svg";

function Profile({ dispatch, user, history }) {
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(resetUser());

    const waitMs = 2000;
    setTimeout(() => {
      history.push("/");
    }, waitMs);
  };
  return (
    <div className="profile__container">
      <Header header_title="Profile" icon={img_back} />
      {user ? (
        <>
          <img className="avatar" src={user?.avatar_url} alt="avatar" />
          <div className="profile__form">
            <label className="profile__label--text">
              Username
              <input
                type="text"
                className="profile__form--username"
                value={user?.login}
                name="username"
                readonly
              />
            </label>

            {user?.email && (
              <label className="profile__label--text">
                Email
                <input
                  type="email"
                  className="profile__form--email"
                  value={user?.email}
                  name="email"
                  readonly
                />
              </label>
            )}

            {user?.company && (
              <label className="profile__label--text">
                Company
                <input
                  type="text"
                  className="profile__form--company"
                  value={user?.company}
                  name="company"
                  readonly
                />
              </label>
            )}
          </div>
          <button
            type="submit"
            className="profile__logout--button"
            onClick={handleLogout}
          >
            LOG OUT
          </button>
        </>
      ) : (
        <img
          src="https://media.giphy.com/media/2vq8dSxVEIjHaNltX9/giphy.gif"
          alt="see-you-gif"
          className="gif__seeyou--profile"
        />
      )}
    </div>
  );
}

function mapStateToProps({ userReducer }) {
  return {
    user: userReducer.user,
  };
}

export default connect(mapStateToProps)(Profile);
