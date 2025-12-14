import axios from 'axios'
import { create } from 'zustand'
const URL = 'http://localhost:3000/data'
const useBearStore = create((set) => ({
  bears: 0,
  data: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  getTodo: async () => {
  try {
    const {data} = await axios.get('http://localhost:3000/data');
    set({data: data})
  } catch (error) {
    console.error(error)
  } 
},
  deleteTodo: async (id) => {
    try {
        await axios.delete(`http://localhost:3000/data/${id}`)
        set((state) => ({ data: state.data.filter(item => item.id != id) }))
    } catch (error) {
        console.error(error);
    }
  },
  addTodo: async (newTodo) => {
    try {
        const {data} = await axios.post(URL, newTodo)
        set((state) => ({ data: [...state.data, data] }))
    } catch (error) {
        console.error(error);
    }
  },
  editTodo: async (id, editTodo) => {
    try {
        await axios.put(`http://localhost:3000/data/${id}`, editTodo)
        set((state) => ({
            data: state.data.map(item => item.id == id ? data : item)
        }))
    } catch (error) {
        console.error(error);
    }
}
}))

export default useBearStore