import { createSlice } from '@reduxjs/toolkit'
import { fileData } from '../../data'

const initialState = {
  dataList: fileData,
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList(state, action) {
      state.dataList = action.payload
    },
  },
})

export const { setList } = listSlice.actions

export default listSlice.reducer
