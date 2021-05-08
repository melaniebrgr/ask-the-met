import { createSlice } from '@reduxjs/toolkit'

export const qasSlice = createSlice({
  name: 'qas',
  initialState: [],
  reducers: {
    qasSubmitted: (state, action) => {
      state.push(action.payload)
    }
  },
})

export const { qasSubmitted } = qasSlice.actions

export default qasSlice.reducer