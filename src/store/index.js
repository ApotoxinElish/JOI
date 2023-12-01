// Combine redux submodules + export store instances

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})
