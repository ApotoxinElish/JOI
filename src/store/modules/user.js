// User related state management

import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'

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

// In asynchronous mode, complete the login to obtain the token

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 1. Send asynchronous request
    const res = await request.post('/api/user/login', loginForm)
    // 2. Submit the synchronous action for token deposit
    dispatch(setToken(res.data.token))
  }
}

export { fetchLogin, setToken }

export default userReducer
