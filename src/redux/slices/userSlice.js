import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react-dom/test-utils'
import { auth, db } from '../../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { useEffect } from 'react'
import { doc, setDoc } from 'firebase/firestore'
export const updateUser = createAsyncThunk(
  'users/update',
  async ({ email, password }) => {
    const res = await signInWithEmailAndPassword(auth, email, password)
    const user = res.user
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user))
    return user
  }
)
export const addUser = createAsyncThunk(
  'users/add',
  async ({ email, password, name }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
      displayName: name,
    }).catch((error) => console.log(error))
    console.log(auth.currentUser)
    localStorage.setItem('user', JSON.stringify(auth.currentUser))
    const docRef = await setDoc(doc(db, 'users', res.user.uid), {
      displayName: name,
      email: email,
      password: password,
    }).catch((err) => console.log(err))
    return auth.currentUser
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: JSON.parse(localStorage.getItem('user')) || null,
    pending: false,
    error: false,
  },
  reducers: {
    logOut: (state) => {
      state.userInfo = null
      localStorage.setItem('user', null)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.pending = true
      state.error = false
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    })
    builder.addCase(updateUser.rejected, (state) => {
      state.pending = false
      state.error = true
    })
    builder.addCase(addUser.pending, (state) => {
      state.pending = true
      state.error = false
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    })
    builder.addCase(addUser.rejected, (state) => {
      state.pending = false
      state.error = true
    })
  },
})
export const { logOut } = userSlice.actions
export default userSlice.reducer
