import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userCart: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutCurrentUser: (state) => {
      state.currentUser = null
    }
  },
});

export const { setCurrentUser, signOutCurrentUser } = userSlice.actions;
export default userSlice.reducer;
  