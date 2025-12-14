import axios from 'axios'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

const JotaiById = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    async function getById() {
        try {
            let {data} = await axios.get(`http://localhost:3000/data/${id}`)
            setData(data)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getById()
    }, [id])
  return (
    <div>
        <h1 className='text-[20px]'>{data?.name}</h1>
        <h2>status: {data.status ? 'Active' : 'Inactive'}</h2>
        <h3>age: {data.age}</h3>
        <h3>id: {data.id}</h3>
    </div>
  )
}

export default JotaiById