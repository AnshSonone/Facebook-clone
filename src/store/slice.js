import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null ,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload
      },
      logout: (state) => {
         state.user = null
      }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

// Selector
export const selectUser = (state) => state.user.user;

export default counterSlice.reducer