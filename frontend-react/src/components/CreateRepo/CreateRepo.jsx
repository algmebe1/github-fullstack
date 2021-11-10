import React, { useState, useEffect, useRef } from "react";
import {
  createRepo,
  resetError,
  resetMessage,
} from "../../redux/actions/repoActions";
import { connect } from "react-redux";
import "./CreateRepo.css";
import Header from "../Header/Header";
import ErrorState from "../ErrorState/ErrorState";
import messageTypes from "../../redux/actions/messageTypes";
import img_close from "../../images/HeaderIcons/close_white.svg";

function CreateRepo({ dispatch, token, error, message }) {
  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, []);

  const messageRef = useRef();

  const handleClose = () => {
    const messageClose = messageRef.current;
    messageClose.style.display = "none";
    dispatch(resetMessage());
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [home, setHome] = useState("");
  const [issues, setIssues] = useState(false);
  const [projects, setProjects] = useState(false);
  const [wiki, setWiki] = useState(false);
  const [isPrivate, setPrivate] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleHome = (event) => {
    setHome(event.target.value);
  };

  const handleIssues = () => {
    setIssues(!issues);
  };

  const handleProjects = () => {
    setProjects(!projects);
  };

  const handleWiki = () => {
    setWiki(!wiki);
  };

  const handlePrivate = () => {
    setPrivate(!isPrivate);
  };

  const handleForm = (event) => {
    event.preventDefault();
    dispatch(
      createRepo(
        name,
        description,
        home,
        issues,
        projects,
        wiki,
        isPrivate,
        token
      )
    );
    setName("");
    setDescription("");
    setHome("");
    setIssues(false);
    setProjects(false);
    setWiki(false);
    setPrivate(false);
  };

  return (
    <div className="createRepo__container">
      <Header header_title="New repository" icon={img_close} />
      {error === messageTypes.ERROR_REQUEST ||
      error === messageTypes.SERVER_ERROR ? (
        <ErrorState errorMessage={error} />
      ) : (
        <>
          <form className="createRepo__form" onSubmit={handleForm}>
            <label for="name" className="createRepo__form--label-input">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="createRepo__form--input-field"
              id="name"
              value={name}
              onChange={handleName}
              required
            />
            <label for="description" className="createRepo__form--label-input">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              className="createRepo__form--input-field textarea"
              id="description"
              value={description}
              onChange={handleDescription}
            />
            <label for="home" className="createRepo__form--label-input">
              Home
            </label>
            <input
              type="text"
              name="home"
              className="createRepo__form--input-field"
              id="home"
              value={home}
              onChange={handleHome}
            />

            <div className="createRepo__form--checkbox-align">
              <label className="createRepo__form--label-checkbox">
                Has issues
              </label>
              <div className="createRepo__form--checkbox-item">
                <input
                  type="checkbox"
                  name="hasIssues"
                  className="createRepo__checkboxQ--style"
                  id="issues"
                  checked={issues}
                  onChange={handleIssues}
                />
                <label for="issues" className="switch"></label>
              </div>
            </div>

            <div className="createRepo__form--checkbox-align">
              <label className="createRepo__form--label-checkbox">
                Has projects
              </label>
              <div className="createRepo__form--checkbox-item">
                <input
                  type="checkbox"
                  name="hasProjects"
                  className="createRepo__checkboxQ--style"
                  id="projects"
                  checked={projects}
                  onChange={handleProjects}
                />
                <label for="projects" className="switch"></label>
              </div>
            </div>

            <div className="createRepo__form--checkbox-align">
              <label className="createRepo__form--label-checkbox">
                Has wiki
              </label>
              <div className="createRepo__form--checkbox-item">
                <input
                  type="checkbox"
                  name="hasWiki"
                  className="createRepo__checkboxQ--style"
                  id="wiki"
                  checked={wiki}
                  onChange={handleWiki}
                />
                <label for="wiki" className="switch"></label>
              </div>
            </div>

            <div className="createRepo__form--checkbox-align">
              <label className="createRepo__form--label-checkbox">
                Private
              </label>
              <div className="createRepo__form--checkbox-item">
                <input
                  type="checkbox"
                  name="isPrivate"
                  className="createRepo__checkboxQ--style"
                  id="private"
                  checked={isPrivate}
                  onChange={handlePrivate}
                />
                <label for="private" className="switch"></label>
              </div>
            </div>

            <input type="submit" value="CREATE" />
          </form>
          {message === messageTypes.REQUEST_SUCCESS ? (
            <div ref={messageRef} className="message">
              <span className="closebtn" onClick={handleClose}>
                &times;
              </span>
              {message}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

function mapStateToProps({ userReducer, repoListReducer }) {
  return {
    token: userReducer.token,
    error: repoListReducer.error,
    message: repoListReducer.message,
  };
}

export default connect(mapStateToProps)(CreateRepo);
