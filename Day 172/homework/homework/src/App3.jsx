import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App3() {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");
  
  useEffect(() => {
    const timeou = setTimeout(() => {
      setCount2(handleApi());
    }, 1000);
    return () => clearTimeout(timeou)
  }, [count]);
  

  
  async function handleApi() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
    let data = await res.json();
    return data.title;
    }

  return (
    <>
      <input
        type="text"
        placeholder="enter"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      ></input>
      <h2>search results: {count2}</h2>
    </>
  );
}

export default App3
