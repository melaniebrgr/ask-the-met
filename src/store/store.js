import { configureStore } from '@reduxjs/toolkit'
import qasReducer from "./slices/qas"

export default configureStore({
  reducer: {
    qas: qasReducer,
  },
})