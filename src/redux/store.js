import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './slices/citySlice'
import dateReducer from './slices/dateSlice'
import userReducer from './slices/userSlice'
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    city: cityReducer,
    date: dateReducer,
    user: userReducer,
  },
})
