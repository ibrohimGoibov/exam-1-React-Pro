import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TodoInfo = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    async function getById() {
        try {
            let{data} = await axios.get(`http://localhost:3000/data/${id}`);
            setData(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getById()
    }, [])
  return (
    <div>
        <div className="text-center border p-[20px] max-w-[200px] flex items-center flex-col gap-[20px] mx-auto mt-10">
        <h1 className='text-[20px] font-[600]'>{data.name}</h1>
        <p>{data.age}</p>
        <p style={{ color: data.status ? 'blue' : 'red' }}>{data.status ? 'Active' : 'Inactive'}</p>
        <Link to={'/todo'}>
        <button className='px-[20px] py-[10px] bg-amber-400 text-white'>Go back</button>
        </Link>
        </div>
    </div>
  )
}

export default TodoInfo