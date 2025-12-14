import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { todos } from "../../store1/todos";
import { Link } from "react-router-dom";

const About = observer(() => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");

  const handleAdd = () => {
    todos.addTodo({
      name,
      age: Number(age),
      status: true
    });

    setName("");
    setAge("");
  };

  const startEdit = (e) => {
    setEditId(e.id);
    setEditName(e.name);
    setEditAge(e.age);
  };

  const saveEdit = () => {
    todos.editTodo(editId, {
      name: editName,
      age: Number(editAge)
    });

    setEditId(null);
    setEditName("");
    setEditAge("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-2"
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border px-2 ml-2"
      />

      <button onClick={handleAdd} className="ml-2 bg-blue-500 text-white px-3">
        Add
      </button>

      <hr className="my-4" />


      {todos.data.map((e) => (
        <div key={e.id} className="border p-3 my-2">
            <>
              <input
                value={editName}
                onChange={(ev) => setEditName(ev.target.value)}
                className="border px-2"
              />
              <input
                type="number"
                value={editAge}
                onChange={(ev) => setEditAge(ev.target.value)}
                className="border px-2 ml-2"
              />
              <button
                onClick={saveEdit}
                className="ml-2 bg-green-600 text-white px-3"
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                className="ml-2 bg-gray-500 text-white px-3"
              >
                Cancel
              </button>
            </>
            <>
              <h3>Name: {e.name}</h3>
              <p>Age: {e.age}</p>

              <button
                onClick={() => startEdit(e)}
                className="bg-yellow-400 px-3"
              >
                Edit
              </button>

              <button
                onClick={() => todos.deleteTodo(e.id)}
                className="ml-2 bg-red-500 text-white px-3">
                Delete
              </button>
              <Link to={`/aboutById/${e.id}`}>
              <button className="px-[20px] ml-[10px] bg-blue-400">Info</button>
              </Link>
            </>
        </div>
      ))}
    </div>
  );
});

export default About;
