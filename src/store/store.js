import { configureStore } from '@reduxjs/toolkit'
import qaReducer from "./slices/qa"

export default configureStore({
  reducer: {
    qa: qaReducer,
  },
})