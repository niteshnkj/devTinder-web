import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnection: (state, action) => {
      return action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    removeConnection: (state, action) => {
      return null;
    },
  },
});

export const { addConnection, removeConnection } = connectionSlice.actions;
export default connectionSlice.reducer;
