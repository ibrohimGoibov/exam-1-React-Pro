import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, deleteUser, addTodo, editTodo, toggleStatus } from './counterSlice'
import { Link } from 'react-router-dom'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const users = useSelector((state) => state.data)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const [editId, setEditId] = useState(null)
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')

  const handleAddUser = () => {
    dispatch(addTodo({ name, age: age, status: true }))
    setName('')
    setAge('')
  }

  const handleSaveEdit = () => {
    dispatch(editTodo({ id: editId, editTodo: { name: editName, age: editAge } }))
    setEditId(null)
    setEditName('')
    setEditAge('')
  }

  return (
    <div className="flex flex-col items-center gap-8 mt-10 max-w-md mx-auto">
      <div className="flex gap-4 items-center">
        <button
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-3xl font-bold min-w-[60px] text-center">{count}</span>
        <button
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Add
        </button>
      </div>

        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Edit Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Edit Age"
            value={editAge}
            onChange={(e) => setEditAge(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <button
            onClick={handleSaveEdit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Save
          </button>
        </div>

      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Sync Todo List</h1>
        <ul className="space-y-4">
          {users.map((e) => (
            <li
              key={e.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div>
                <span className="font-medium text-lg">{e.name}</span> —{' '}
                <span className="text-gray-600">{e.age} лет</span>
              </div>

              <div className="flex gap-2 items-center">
                <button
                  onClick={() => dispatch(toggleStatus(e.id))}
                  className={`px-5 py-2 rounded-lg font-medium transition ${
                    e.status
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-400 hover:bg-gray-500 text-white'
                  }`}
                >
                  {e.status ? 'Active' : 'Inactive'}
                </button>

                <button
                  onClick={() => dispatch(deleteUser(e.id))}
                  className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  DELETE
                </button>

                <button
                  onClick={() => {
                    setEditId(e.id)
                    setEditName(e.name)
                    setEditAge(e.age)
                  }}
                  className="px-3 py-2 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <Link to={`/id/${e.id}`}>Info</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Counter
