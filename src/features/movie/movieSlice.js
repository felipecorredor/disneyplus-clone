import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  newDisney: [],
  original: [],
  trending: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
