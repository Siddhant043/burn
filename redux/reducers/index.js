// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// Import other reducer slices as needed

const rootReducer = combineReducers({
  user: userReducer,
  // Add other slices here
});

export default rootReducer;
