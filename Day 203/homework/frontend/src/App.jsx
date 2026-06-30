import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inp, setInp] = useState("")

  const fetchTodos = () => {
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => setTodos(data))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleAdd = () => {
    const newTodo = { text: inp, completed: false, id: Date.now() }
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    }).then(() => {
      fetchTodos()
      setInp("")
    })
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    }).then(() => fetchTodos())
  }

  return (
    <>
      <div className='todoDiv'>
        {todos.map(i => (
          <div key={i.id}>
            <p>{i.text}</p>
            {i.completed ? <p>X</p> : ""}
            <button onClick={() => handleDelete(i.id)}>Delete</button>
          </div>
        ))}
      </div>
      <input type='text' value={inp} onChange={(e) => setInp(e.target.value)} placeholder='Enter text here'></input>
      <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default App

