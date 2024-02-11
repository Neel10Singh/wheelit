import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "city",
  initialState: {
    cityname: "Mumbai",
  },
  reducers: {
    updateCity: (state, action) => {
      state.cityname = action.payload;
    },
  },
});
export const { updateCity } = citySlice.actions;
export default citySlice.reducer;
