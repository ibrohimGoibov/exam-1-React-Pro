import { useAtom } from 'jotai'

import { animeAtom, getTodoAtom, dataAtom, deleteAtom, addAtom, editAtom } from '../../atom/atom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Jotai = () => {
  const [anime, setAnime] = useAtom(animeAtom)
  const [,getTodo] = useAtom(getTodoAtom)
  const [,deleteTodo] = useAtom(deleteAtom)
  const [data] = useAtom(dataAtom)
  const [,addTodo] = useAtom(addAtom);
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')
  const [,editTodo] = useAtom(editAtom);
  useEffect(() => {
    getTodo()
  }, [])
  
  return (
    <>
      <ul>
        {anime.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => {
        setAnime((anime) => [
          ...anime,
          {
            title: 'Cowboy Bebop',
            year: 1998,
            watched: false
          }
        ])
      }}>
        Add Cowboy Bebop
      </button>
      <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={() => addTodo({ name, age })}>Add</button>
      <input type="text" placeholder='Edit Name' value={editName} onChange={(e) => setEditName(e.target.value)} />
      <input type="text" placeholder='Edit Age' value={editAge} onChange={(e) => setEditAge(e.target.value)} />
      <button>Add</button>
      {data.map((e) => {
        return (
          <div>
            <h1>{e.name}</h1>
            <h2>{e.status ? 'true' :  'false'}</h2>
            <h3>{e.age}</h3>
            <Link to={`/jotaiById/${e.id}`}>
            info
            </Link>
            <button onClick={() => {
              setEditName(e.name)
              setEditAge(e.age)
              editTodo(e.id, { name: editName, age: editAge })
            }}>Edit</button>
            <button onClick={() => deleteTodo(e.id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}
export default Jotai