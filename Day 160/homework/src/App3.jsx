import { useState } from "react";
import { useId } from "react";
import "./App.css";

function App3() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const id = useId();

  return (
    <>
      <form id={id}>
        <input
          onInput={(e) => setInputValue(e.target.value)}
          type="text"
          id={id}
        />
        <button type="button" onClick={() => setList([...list, inputValue])}>
          Add
        </button>
        <ul>
          {list.map((item, index) => (
            <li key={id + index}>{item}</li>
          ))}
        </ul>
      </form>
      <form>
        <label htmlFor="text">Name:</label>
        <input id="text" type="text" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        <label htmlFor="number">Number:</label>
        <input id="number" type="number" />
      </form>
    </>
  );
}

export default App3;
