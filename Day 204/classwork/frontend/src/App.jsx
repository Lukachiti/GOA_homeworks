import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inp, setInp] = useState("")
  const [sendData, setSendData] = useState({})
  const handleAdd = () => {
    setSendData({text: inp, completed: false, id: Date.now()})
    fetch("http://localhost:${PORT}/", {
      method: "POST",
      body: JSON.stringify(sendData)
    })
    setInp("")
    setSendData({})
  }
  const handleDelete = () = {}
  return (
    <>
      <div className='todoDiv'>
        {todos.map(i => <div>
          <p>i.text</p>
          {i.completed ? <p>X</p> : ""}
          <button onClick={handleDelete()}>Delete</button>
        </div>)}
      </div>
      <input type='text' onChange={(e) => {setInp(e.target.value)}} placeholder='Enter text here'></input>
      <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default App
