import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
  name: "user",
  initialState: { value: {} },
  reducers: {
    login: (state, { payload }) => {
      state.value = payload;
    },
    logout: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const {login, logout} = userSlicer.actions
export default userSlicer.reducer;
