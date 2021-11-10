import { combineReducers } from "redux";
import userReducer from "./userReducer";
import repoListReducer from "./repoListReducer";

const rootReducer = combineReducers({ userReducer, repoListReducer });

export default rootReducer;
