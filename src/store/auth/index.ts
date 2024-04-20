import { createSlice } from "@reduxjs/toolkit";

const initialState: { uid: string } = {
  uid: "asd",
};

const configReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = configReducer.actions;

export default configReducer.reducer;
