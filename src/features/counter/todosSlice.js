import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[]
};
export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

     removeTodo: (state, {payload}) => {}
   
},
})
export const { removeTodo } = counterSlice.actions

export default counterSlice.reducer