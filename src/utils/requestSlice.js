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
  },
});
export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
