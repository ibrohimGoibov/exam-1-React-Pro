import axios from 'axios'
import { atom } from 'jotai'

export const dataAtom = atom([])

export const animeAtom = atom([
  { title: 'Ghost in the Shell', year: 1995, watched: true },
  { title: 'Serial Experiments Lain', year: 1998, watched: false },
])

export const getTodoAtom = atom(
  null,
  async (_, set) => {
    try {
      const res = await axios.get('http://localhost:3000/data')
      set(dataAtom, res.data)
    } catch (error) {
      console.error(error)
    }
  }
)

export const deleteAtom = atom(
  null,
  async (get, set, id) => {
    try {
      await axios.delete(`http://localhost:3000/data/${id}`)
      set(
        dataAtom,
        get(dataAtom).filter(item => item.id !== id)
      )
    } catch (error) {
      console.error(error)
    }
  }
)

export const addAtom = atom(
  null,
  async (get, set, newItem) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/data',
        newItem
      )
      set(dataAtom, [...get(dataAtom), res.data])
    } catch (error) {
      console.error(error)
    }
  }
)

export const editAtom = atom(
  null,
  async (get, set, { id, editItem }) => {
    try {
      await axios.put(
        `http://localhost:3000/data/${id}`,
        editItem
      )

      set(
        dataAtom,
        get(dataAtom).map(item =>
          item.id == id ? { ...item, ...editItem } : item
        )
      )
    } catch (error) {
      console.error(error)
    }
  }
)
