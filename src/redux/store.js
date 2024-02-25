import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './slices/citySlice'
import dateReducer from './slices/dateSlice'
import userReducer from './slices/userSlice'
import vehicleReducer from './slices/vehicleSlice'
import bookingReducer from './slices/bookingSlice'
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    city: cityReducer,
    date: dateReducer,
    user: userReducer,
    vehicles: vehicleReducer,
    bookings: bookingReducer,
  },
})
