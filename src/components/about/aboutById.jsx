import React from 'react'
import { todos } from '../../store1/todos'
import { Link, useParams } from 'react-router-dom'
const AboutById = () => {
    const { id } = useParams();
    const item = todos.getById(id);
    console.log(id);
  return (
    <div>
        <div className="border flex items-center p-[20px] flex-col gap-[20px] w-[300px] m-auto">
        <h1 className='text-[40px]'>{item?.name}</h1>
        <h1 className='text-[20px]'>{item?.age}</h1>
        <h1 style={{color: item?.status ? 'blue' : 'red'}}>{item?.status ? 'Active' : 'Inactive'}</h1>
        <h1>id: {item?.id}</h1>
        <Link to={'/about'}>
        <button className='px-[20px] py-[10px] bg-blue-500 text-white'>Go back</button>
        </Link>
        </div>
    </div>
  )
}

export default AboutById