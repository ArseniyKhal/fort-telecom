import { configureStore } from '@reduxjs/toolkit'
import listSlice from './slices/listSlice'

export const store = configureStore({
  reducer: {
    dataList: listSlice,
  },
})
