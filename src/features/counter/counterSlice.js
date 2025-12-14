import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
})

const dataSlice = createSlice({
  name: 'data',
  initialState: [
    { name: 'Ali', age: 25, id: 1, status: true },
    { name: 'Sara', age: 22, id: 2, status: false },
    { name: 'John', age: 30, id: 3, status: true },
  ],
  reducers: {
    toggleStatus: (state, action) => {
      const user = state.find(u => u.id == action.payload)
      user.status = !user.status
    },
    deleteUser: (state, action) => {
      return state.filter((u) => u.id != action.payload)
    },
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        ...action.payload,
      })
    },
    editTodo: (state, action) => {
  const { id, editTodo } = action.payload
  const user = state.find(e => e.id == id)
    user.name = editTodo.name
    user.age = editTodo.age
},
    getById: (state, action) => {
      return state.find((e) => e.id == action.payload)
    },

  },
})

export const { increment, decrement } = counterSlice.actions
export const { toggleStatus, deleteUser, addTodo, editTodo } = dataSlice.actions

export const counterReducer = counterSlice.reducer
export const dataReducer = dataSlice.reducer
