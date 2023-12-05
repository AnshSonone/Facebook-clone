import { configureStore } from '@reduxjs/toolkit'
import slice from './slice';

export const store = configureStore({
  reducer: {
    user : slice,
  },
})

export default store;