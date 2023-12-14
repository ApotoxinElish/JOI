// User related state management

import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'

const userStore = createSlice({
  name: 'user',
  // Data state
  initialState: {
    token: localStorage.getItem('token_key') || '',
  },
  // Synchronous modification method
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // localstorage Stores a copy
      localStorage.setItem('token_key', action.payload)
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
    const res = await request.post('/api/user/login2', loginForm)
    console.log(res)
    if (res.code === '200') {
      console.log(res.code)
      localStorage.setItem('is_login', true)
    } else {
      console.log('fail')
      localStorage.setItem('is_login', false)
    }
    // 2. Submit the synchronous action for token deposit
    // dispatch(setToken(res.data.token))
  }
}

const sendMessage = (messageForm) => {
  return async (dispatch) => {
    // 1. Send asynchronous request
    const res = await request.post('/chat/sendmessage', messageForm)
    console.log(res)
    if (res.code === '200') {
      console.log(res.code)
      localStorage.setItem('is_login', true)
    } else {
      console.log('fail')
      localStorage.setItem('is_login', false)
    }
    // 2. Submit the synchronous action for token deposit
    // dispatch(setToken(res.data.token))
  }
}

export { fetchLogin, setToken }

export default userReducer
