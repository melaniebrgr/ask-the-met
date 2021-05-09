import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';
import { sleep } from '../utils/sleep'

export const qaSubmitted = createAsyncThunk(
  'qas/qaSubmitted',
  async (qa, { getState }) => {
    await sleep(5000) // delay to simulate a backend request per instructions
    localStorage.setItem('ask-the-met/qas', JSON.stringify([...getState().qas.data, qa]));
    return JSON.parse(localStorage.getItem('ask-the-met/qas'));
  }
)

export const qasHydrated = createAsyncThunk(
  'qas/qasHydrated',
  async (_, { getState }) => {
    const stateQas = getState().qas.data
    const localStorageQas = JSON.parse(localStorage.getItem('ask-the-met/qas')) || []
    const mergedQas = [ ...stateQas ]

    localStorageQas.forEach(qaA => {
      const qaExists = Boolean(stateQas.find(qaB => qaA.id === qaB.id))
      if (!qaExists) mergedQas.push(qaA)
    })

    return mergedQas;
  }
)

export const qasSlice = createSlice({
  name: 'qas',
  initialState: {
    requestStatus: '',
    data: [{ 
      id: uuid(),
      q: "How to add a question? (Click me to find out)",
      a: "Just use the form!"
    }]
  },
  reducers: {
    qaEditted: (state, action) => {
      const i = state.data.findIndex(qa => qa.id === action.payload.id)
      state.data[i] = action.payload
    },
    qaDeleted: (state, action) => {
      const i = state.data.findIndex(qa => qa.id === action.payload)
      state.data.splice(i, 1);
    },
    qasDeleted: (state) => {
      state.data.splice(0, state.data.length);
    }
  },
  extraReducers: {
    [qaSubmitted.pending](state, action) {
      state.requestStatus = action.meta.requestStatus
    },
    [qaSubmitted.rejected](state, action) {
      state.requestStatus = action.meta.requestStatus
    },
    [qaSubmitted.fulfilled](state, action) {
      state.requestStatus = action.meta.requestStatus
      state.data = action.payload
    },
    [qasHydrated.fulfilled](state, action) {
      state.data = action.payload
    },
  }
})

export const { qaEditted, qaDeleted, qasDeleted } = qasSlice.actions

export default qasSlice.reducer