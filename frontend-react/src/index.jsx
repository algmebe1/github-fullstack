import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import RepoList from "./components/RepoList/RepoList";
import CreateRepo from "./components/CreateRepo/CreateRepo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../src/redux/configureStore";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
  userReducer: { user: {} },
  repoReducer: { repoList: [] },
});

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/list" exact component={RepoList} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/createrepo" exact component={CreateRepo} />
        </Switch>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
