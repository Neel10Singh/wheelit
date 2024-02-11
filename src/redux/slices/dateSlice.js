import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
const currdate = new Date();

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    startdate: dayjs(currdate),
    enddate: dayjs(currdate),
  },
  reducers: {
    updateDate: (state, action) => {
      state.startdate = action.payload[0];
      state.enddate = action.payload[1];
    },
  },
});
export const { updateDate } = dateSlice.actions;
export default dateSlice.reducer;
