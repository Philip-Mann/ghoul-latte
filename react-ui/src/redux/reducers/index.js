// Import all our reducers then exports them
import { combineReducers } from "redux";
import userName from "./userName";


// value of userName coming from line 2
export default combineReducers({ userName });