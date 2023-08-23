import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export default userSlice.reducer;
