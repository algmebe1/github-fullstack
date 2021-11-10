import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import img from "../../images/GitHubLogos/git-login.png";
import { connect } from "react-redux";
import { loadUser, resetError } from "../../redux/actions/userActions";

function Login({ dispatch, user, error, history }) {
  const [username, setUsername] = useState("");
  const [pat, setPat] = useState("");

  const PAT_URL = "https://github.com/settings/tokens";

  const errorMsgRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loadUser(pat, username));
  };

  useEffect(() => {}, [error]);

  useEffect(() => {
    if (user?.login) {
      dispatch(resetError());
      history.push("/list");
    }
  }, [user]);

  const handleName = (event) => {
    setUsername(event.target.value);
  };

  const handlePat = (event) => {
    setPat(event.target.value);
  };

  const handleClose = () => {
    const messageClose = errorMsgRef.current;
    messageClose.style.display = "none";
    dispatch(resetError());
  };

  return (
    <div className="login__container">
      <img src={img} alt="github-logo" />
      <div className="login__input">
        <label for="username" className="login__label--hidden">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          className="login__input--username"
          id="username"
          onChange={handleName}
        />
        <label for="password" className="login__label--hidden">
          Password
        </label>
        <input
          type="password"
          placeholder="Personal Access Token"
          className="login__input--access-token"
          id="password"
          onChange={handlePat}
        />
        <button
          className="login__input--submit"
          type="submit"
          onClick={handleLogin}
        >
          LOG IN
        </button>
      </div>
      <div className="login__getPat">
        <a href={PAT_URL} target="blank" className="login__getPat--link">
          Not an user? Get your PAT!
        </a>
      </div>
      {typeof error === "string" ? (
        <div ref={errorMsgRef} className="errorMsg">
          <span className="closebtn" onClick={handleClose}>
            &times;
          </span>
          {error}
        </div>
      ) : null}
    </div>
  );
}

function mapStateToProps({ userReducer }) {
  return {
    user: userReducer.user,
    error: userReducer.error,
  };
}

export default connect(mapStateToProps)(Login);
