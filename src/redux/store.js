import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./slices/citySlice";
import dateReducer from "./slices/dateSlice";
export default configureStore({
  reducer: {
    city: cityReducer,
    date: dateReducer,
  },
});
