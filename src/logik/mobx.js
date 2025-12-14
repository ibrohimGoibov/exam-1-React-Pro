import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=b0639e24";

const Mobx = createSlice({
  name: 'users',
  initialState: {
    data: [
      { id: 1, name: "nasimjone", description: "zode", status: false },
      { id: 2, name: "komol",     description: "janes", status: true  },
    ],
    loading: false,
    error: null,
  },
  reducers: {  
    deleteUser: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },

    toggleStatus: (state, action) => {
      const user = state.data.find(item => item.id === action.payload);
      if (user) {
        user.status = !user.status;      
      }
    },
  
    updateUser: (state, action) => {
      const { id, name, description } = action.payload;
      const user = state.data.find(item => item.id === id);
      if (user) {
        user.name = name;
        user.description = description;
      }
    },
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description || "",
        status: action.payload.status ?? false,
      };
      state.data.push(newUser);
    },
  },
});
export const { deleteUser, toggleStatus, updateUser, addUser } = Mobx.actions;
export default Mobx.reducer;