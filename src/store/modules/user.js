// User related state management

import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
  name: 'user',
  // Data state
  initialState: {
    token: '',
  },
  // Synchronous modification method
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
  },
})

// Deconstruct the actionCreater

const { setToken } = userStore.actions

// Get reducer function

const userReducer = userStore.reducer

export { setToken }

export default userReducer
