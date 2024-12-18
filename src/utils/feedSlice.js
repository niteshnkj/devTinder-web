import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,

    removeFeed: (state, action) => {
      const newArray = state.filter((f) => f._id !== action.payload);
      return newArray;
    },
    // eslint-disable-next-line no-unused-vars
    clearFeed: (state, action) => {
      return null;
    },
  },
});
export const { addFeed, removeFeed, clearFeed } = feedSlice.actions;
export default feedSlice.reducer;
