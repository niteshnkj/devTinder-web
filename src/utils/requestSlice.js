import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },

    removeRequest: (state, action) => {
      // whatever id i'm giving you remove it from the existing state
      const newArray = state.filter((req) => req._id !== action.payload);
      return newArray;
    },
    // eslint-disable-next-line no-unused-vars
    clearRequest: (state, action) => {
      return null;
    },
  },
});
export const { addRequest, removeRequest,clearRequest } = requestSlice.actions;
export default requestSlice.reducer;
