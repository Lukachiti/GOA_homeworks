import { useEffect, useState } from "react";
import "./App.css";

function App() {
  
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  if (theme === "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 1000);
  }, [todos]);

  return (
    <>
      <div>
        {" "}
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <div>
          <p>hello world</p>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <h2>to do list</h2>
        <input
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            setTodos([...todos, { text: input, completed: false }]);
            setInput("");
          }}
        >
          Add Todo
        </button>
        <button onClick={() => setTodos(todos.slice(0, -1))}>
          Remove Todo
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text} completed: {todo.completed ? "Yes" : "No"}
              <button onClick={() => {
                const newTodos = [...todos];
                newTodos[index].completed = !newTodos[index].completed;
                setTodos(newTodos);
              }}>
                complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
