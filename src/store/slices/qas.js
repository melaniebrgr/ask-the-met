import { createSlice } from '@reduxjs/toolkit'

export const qasSlice = createSlice({
  name: 'qas',
  initialState: [],
  reducers: {
    qasSubmitted: (state, action) => {
      state.push(action.payload)
    },
    qaEditted: (state, action) => {
      const i = state.findIndex(qa => qa.id === action.payload.id)
      state[i] = action.payload
    },
    qaDeleted: (state, action) => {
      const i = state.findIndex(qa => qa.id === action.payload)
      state.splice(i, 1);
    },
    qasDeleted: (state) => {
      state.splice(0, state.length);
    }
  },
})

export const { qasSubmitted, qaEditted, qaDeleted, qasDeleted } = qasSlice.actions

export default qasSlice.reducer