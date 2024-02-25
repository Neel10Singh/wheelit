import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

export const getVehicles = createAsyncThunk('vehicles/get', async () => {
  const q = query(collection(db, 'mumbai'), where('booked', '==', false))
  const querySnapshot = await getDocs(q)
  let vlist = []
  querySnapshot.forEach((doc) => {
    vlist = [...vlist, { ...doc.data(), id: doc.id }]
    // setVehicleList([...vehicleList, { ...doc.data(), id: doc.id }])
    console.log(doc.id, ' => ', doc.data())
  })
  console.log(vlist)
  return vlist
})

export const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicleList: null,
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVehicles.pending, (state) => {
      state.pending = true
      state.error = false
    })
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      state.pending = false
      state.vehicleList = action.payload
    })
    builder.addCase(getVehicles.rejected, (state) => {
      state.pending = false
      state.error = true
    })
  },
})
export default vehicleSlice.reducer
