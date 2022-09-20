import { configureStore } from '@reduxjs/toolkit'
import historySlise from './usersHistorySlice'

export const store = configureStore({
  reducer: {
    usersActionsHistory: historySlise
  },
})