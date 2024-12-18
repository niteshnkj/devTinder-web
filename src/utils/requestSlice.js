import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    removeRequest: (state, action) => {
      return null;
    },
  },
});
export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
