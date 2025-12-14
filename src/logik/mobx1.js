import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=b0639e24";

const Mobx1 = createSlice({
    data: [],
    getTodo: async () => {
        try {
            const res = await axios.get('http://localhost:3000/data');
            set({data: res.data});
        } catch (error) {
            console.error(error);
        }
    },
})
export const { getTodo } = Mobx1.actions;
export default Mobx1.reducer;