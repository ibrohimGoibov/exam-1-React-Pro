import React, { use, useEffect, useState } from 'react'
import useBearStore from '../../store/store'
import { Link } from 'react-router-dom'
const Zustand = () => {
    const bears = useBearStore((state) => state.bears)
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    const getTodo = useBearStore((state) => state.getTodo)
    const data = useBearStore((state) => state.data)
    const deleteTodo = useBearStore((state) => state.deleteTodo)
    const addTodo = useBearStore((state) => state.addTodo)
    const editTodo = useBearStore((state) => state.editTodo)
    const [editName, setEditName] = useState('')
    const [editAge, setEditAge] = useState('')

    const startEdit = (id) => {
        const item = data.find((e) => e.id === id)
        setEditName(item.name)
        setEditAge(item.age)
    }

    const addNewTodo = () => {
        addTodo({
            name: name,
            age: age,
            status: true
        })
    }

    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    console.log(data);
    useEffect(() => {
        getTodo()
    }, [])
  return (
    <div>
        <div className="flex items-center gap-[10px]">

        <input className='border' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='border' type="text" placeholder='Name' value={age} onChange={(e) => setAge(e.target.value)} />
        <button className='bg-blue-500 text-white px-[10px]' onClick={addNewTodo}>Add</button>
        </div>
        <h1>Edit</h1>
        <div className="flex items-center gap-[10px]">
        <input className='border' type="text" placeholder='Edit Name' value={editName} onChange={(e) => setEditName(e.target.value)} />
        <input className='border' type="text" placeholder='Edit Age' value={editAge} onChange={(e) => setEditAge(e.target.value)} />
        <button className='bg-blue-500 text-white px-[10px]' onClick={editTodo}>Edit</button>
        </div>
        <h1>{bears}</h1>
        <button onClick={increasePopulation}>one up</button>
        {data.map((e) => {
            return (
                <div className='border p-[10px] w-[300px]'>
                    <h1>{e.name}</h1>
                    <h2>{e.age}</h2>
                    <h2>{e.status ? 'Active' : 'Inactive'}</h2>
                    <div className="flex items-center gap-[10px]">
                    <Link className='bg-amber-400' to={`/byId/${e.id}`}>info</Link>
                    <button className='bg-amber-400' onClick={() => deleteTodo(e.id)}>Delete</button>
                    <button className='bg-amber-400' onClick={() => startEdit(e.id)}>Edit</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Zustand