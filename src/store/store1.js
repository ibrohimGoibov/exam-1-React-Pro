import { create } from 'zustand'
const useBearStore = create((set, get) => ({
  bears: 0,
  data: [
    {
      name: 'Ali',
      age: 20,
      status: true,
      id: 1,
    },
    {
      name: 'Ahmad',
      age: 25,
      status: false,
      id: 2
    }
  ],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  addTodo(todos) {
    set((state) => ({
      data: [
        ...state.data,
        {
          id: Date.now(),
          ...todos
        }
      ],
    }));
  },
  editTodo(id, editTodo) {
    set((state) => ({
      data: state.data.map((item) =>
        item.id == id ? { ...item, ...editTodo } : item),
    }));
  },
  getById(id){
    return get().data.find((e) => e.id == id);
  },
  deleteTodo(id){
    set((state) => ({
      data: state.data.filter((e) => e.id != id),
    }));
  }
}));

export default useBearStore