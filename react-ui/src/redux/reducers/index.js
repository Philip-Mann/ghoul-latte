// Import all our reducers then export them
import { combineReducers } from "redux";
import email from "./email";
// import number from '../slices/quantitySlice'


// value of userName coming from line 3
export default combineReducers({ email });