import { useState } from 'react'
import useBearStore from '../../store/store1'
import { Link } from 'react-router-dom';
const Sync = () => {
  const data = useBearStore((state) => state.data);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState(""); 
  const addTodo = useBearStore((state) => state.addTodo);
  const editTodo = useBearStore((state) => state.editTodo);
  const deleteTodo = useBearStore((state) => state.deleteTodo)

  const handleAdd = () => {
    addTodo({
      name,
      age: age,
      status: true
    });
    setName("");
    setAge("");
  };

  const saveEdit = () => {
    editTodo(editId, {
      name: editName,
      age: Number(editAge)
    });
    setEditId(null);
    setEditName("");
    setEditAge("");
  };

  return (
    <div>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border px-2" />

      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="border px-2 ml-2"/>

      <button onClick={handleAdd} className="ml-2 bg-blue-500 text-white px-3">
        Add
      </button>
      {data.map((e) => {
        return (
          <div key={e.id}>
              <>
                <input value={editName} onChange={(ev) => setEditName(ev.target.value)} className="border px-2"/>
                <input type="number" value={editAge} onChange={(ev) => setEditAge(ev.target.value)} className="border px-2 ml-2"/>
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
                <h1>{e.name}</h1>
                <h2>{e.age}</h2>
                <h2>{e.status ? 'Active' : 'Inactive'}</h2>
                <button
                  onClick={() => {
                    setEditId(e.id);
                    setEditName(e.name);
                    setEditAge(e.age);
                  }}
                  className="ml-2 bg-yellow-500 text-white px-3"
                >
                  Edit
                </button>
                <Link to={`/syncById/${e.id}`}>Info</Link>
                <button onClick={() => deleteTodo(e.id)}>Delete</button>
              </>
          </div>
        )
      })}
    </div>
  )
}

export default Sync;