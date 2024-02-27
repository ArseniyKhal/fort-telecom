import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataList: [],
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

export const { setList, setCheckedList } = listSlice.actions

export default listSlice.reducer
