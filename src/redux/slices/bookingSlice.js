import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'

export const getBookings = createAsyncThunk('bookings/get', async (user) => {
  // console.log(user)
  let bookingdata = []

  for (const booking of user.bookings) {
    // console.log(booking)
    if (booking !== '') {
      const docRef = doc(db, 'bookings', booking)
      const docSnap = await getDoc(docRef)
      let book = docSnap.data()

      const vehRef = doc(db, 'mumbai', book.vehicleid)
      const vehSnap = await getDoc(vehRef)
      let vehicle = vehSnap.data()
      // console.log(vehicle)
      book = { ...book, ...vehicle }
      console.log(book)
      bookingdata = [...bookingdata, book]
    }
  }
  console.log(bookingdata)
  return bookingdata
})

export const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookingList: null,
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookings.pending, (state) => {
      state.pending = true
      state.error = false
    })
    builder.addCase(getBookings.fulfilled, (state, action) => {
      state.pending = false
      state.bookingList = action.payload
    })
    builder.addCase(getBookings.rejected, (state) => {
      state.pending = false
      state.error = true
    })
  },
})
export default bookingSlice.reducer
