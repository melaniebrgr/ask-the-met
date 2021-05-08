import { createSlice } from '@reduxjs/toolkit'

export const qaSlice = createSlice({
  name: 'qa',
  initialState: [],
  reducers: {
    qaSubmitted: (state, action) => {
      state.push(action.payload)
    }
  },
})

export const { qaSubmitted } = qaSlice.actions

export default qaSlice.reducer