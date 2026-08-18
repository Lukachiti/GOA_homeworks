import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  // Fetch initial todos on load
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todos')
        setTodos(response.data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }

    fetchTodos()
  }, [])

  const handleAddItem = async () => {
    if (!inputValue.trim()) return // Prevent adding empty text

    try {
      const response = await axios.post('http://localhost:3000/todos', {
        item: inputValue,
        completed: false,
        id: Date.now()
      })

      // Update UI state directly with the new item from the response
      setTodos((prevTodos) => [...prevTodos, response.data])
      setInputValue('')
    } catch (error) {
      console.error('Error adding item:', error)
    }
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="Enter your to do item" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.item}</span> - 
            <span>{todo.completed ? ' Completed' : ' Not Completed'}</span>
            <button onClick={() => {
              axios.delete(`http://localhost:3000/todos/${todo.id}`)
                .then(() => {
                  setTodos((prevTodos) => prevTodos.filter(t => t.id !== todo.id))
                })
                .catch((error) => {
                  console.error('Error deleting item:', error)
                })
            }}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App