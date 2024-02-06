
import thunkMiddleware from "redux-thunk" 
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import slice from './slice';

const composedEnhancer = applyMiddleware(thunkMiddleware)

export const store = configureStore({
  reducer: {
    user : slice,
  },
}, composedEnhancer)

export default store;