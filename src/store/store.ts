import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";

const rootStore = combineReducers({
  auth,
});

export default rootStore;
export type RootState = ReturnType<typeof rootStore>;
