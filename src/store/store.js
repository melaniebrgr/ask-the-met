import { configureStore } from '@reduxjs/toolkit'
import qasReducer from './slices/qas'
import artReducer from './slices/art'

export default configureStore({
  reducer: {
    qas: qasReducer,
    art: artReducer
  },
})