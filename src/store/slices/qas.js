import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';
import { sleep } from '../utils/sleep'

export const qasHydrated = createAsyncThunk(
  'qas/qasHydrated',
  async (_, { getState }) => {
    const stateQas = getState().qas.data
    const localStorageQas = JSON.parse(localStorage.getItem('ask-the-met/qas'))
    const qas = [ ...stateQas ]

    localStorageQas.forEach(qaA => {
      const qaExists = Boolean(stateQas.find(qaB => qaA.id === qaB.id))
      if (!qaExists) qas.push(qaA)
    })

    if (!Boolean(qas.length)) qas.push({ 
      id: uuid(),
      q: "How to add a question? (Click me to find out)",
      a: "Just use the form!"
    })

    return qas;
  }
)

export const qaSubmitted = createAsyncThunk(
  'qas/qaSubmitted',
  async (qa, { getState }) => {
    await sleep(5000) // delay to simulate a backend request per instructions
    localStorage.setItem('ask-the-met/qas', JSON.stringify([...getState().qas.data, qa]));
    return JSON.parse(localStorage.getItem('ask-the-met/qas'));
  }
)

export const qasDeleted = createAsyncThunk(
  'qas/qasDeleted',
  async () => {
    localStorage.setItem('ask-the-met/qas', JSON.stringify([]));
    return JSON.parse(localStorage.getItem('ask-the-met/qas'));
  }
)

export const qaDeleted = createAsyncThunk(
  'qas/qaDeleted',
  async (id, { getState }) => {
    const stateQas = getState().qas.data
    localStorage.setItem('ask-the-met/qas', JSON.stringify(stateQas.filter(qa => qa.id !== id)));
    return JSON.parse(localStorage.getItem('ask-the-met/qas'));
  }
)

export const qasSlice = createSlice({
  name: 'qas',
  initialState: {
    requestStatus: '',
    data: []
  },
  reducers: {
    qaEditted: (state, action) => {
      const i = state.data.findIndex(qa => qa.id === action.payload.id)
      state.data[i] = action.payload
    }
  },
  extraReducers: {
    [qasHydrated.fulfilled](state, action) {
      state.data = action.payload
    },
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
    [qasDeleted.fulfilled](state, action) {
      state.data = action.payload
    },
    [qaDeleted.fulfilled](state, action) {
      state.data = action.payload
    }
  }
})

export const { qaEditted } = qasSlice.actions

export default qasSlice.reducer