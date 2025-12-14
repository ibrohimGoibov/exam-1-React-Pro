import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const selectUserById = (state, id) => state.data.find(user => user.id === Number(id))

const Id = () => {
  const { id } = useParams()
  const user = useSelector((state) => selectUserById(state, id))
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Status:</strong> {user.status ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

export default Id
