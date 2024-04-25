import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/todosSlice"

export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
});