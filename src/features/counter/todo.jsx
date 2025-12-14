import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const URL = "http://localhost:3000/data";
const Todo = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editId, setEditId] = useState(null);
  async function getTodo() {
    try {
      const { data } = await axios.get(URL);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteTodo(id) {
    try {
      await axios.delete(`${URL}/${id}`);
      getTodo();
    } catch (error) {
      console.error(error);
    }
  }
  async function addTodo(newUser) {
    try {
      await axios.post(URL, newUser);
      setName("");
      setAge("");
      getTodo();
    } catch (error) {
      console.error(error);
    }
  }

  async function editTodo(id) {
    try {
      await axios.put(`${URL}/${id}`, { name: editName, age: editAge });
      setEditName("");
      setEditAge("");
      setEditId(null);
      getTodo();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center gap-[20px] flex-col">
      <input
        className="border px-[20px] py-[10px]"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <input
        className="border px-[20px] py-[10px]"
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        />
      <button className="px-[20px] py-[10px] bg-amber-900 text-white" onClick={() => addTodo({ name, age })}>Add</button>
        </div>

      <h2>Edit Todo</h2>
      <div className="flex items-center justify-center gap-[20px] flex-col">

      <input
      className="border px-[20px] py-[10px]"
        type="text"
        placeholder="Edit Name"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        />
      <input
      className="border px-[20px] py-[10px]"
        type="text"
        placeholder="Edit Age"
        value={editAge}
        onChange={(e) => setEditAge(e.target.value)}
        />
      <button
      className="px-[20px] py-[10px] bg-amber-400 text-white"
        onClick={() => {
           editTodo(editId);
        }}
        >
        Save
      </button>
    </div>


<div className="flex items-center justify-evenly flex-wrap">

      {data.map((e) => (
        <div className="card border p-[20px] max-w-[300px] mx-auto my-[20px]" key={e.id}>
        <div key={e.id}>
          <h3>{e.name}</h3>
          <p>{e.age}</p>
          <div className="flex items-center gap-[10px]">
          <button className="px-[20px] py-[10px] bg-[#5d5dd5]" onClick={() => deleteTodo(e.id)}>Delete</button>
          <button className="px-[20px] py-[10px] bg-[#5d5dd5]" 
            onClick={() => {
              setEditId(e.id);
              setEditName(e.name);
              setEditAge(e.age);
            }}
            >
            Edit
          </button>
          <Link to={`/todoInfo/${e.id}`}>
          <button>Info</button>
          </Link>
            </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Todo;
