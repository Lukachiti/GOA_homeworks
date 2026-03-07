import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App2() {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");
  const arr = ["apple", "banana", "pear", "rtx 5090", "kiwi", "grape", "orange", "mango", "strawberry", "blueberry"];

  useEffect(() => {
    const timeou = setTimeout(() => {
      setCount2(handleSearch());
    }, 1000);
    return () => clearTimeout(timeou)
  }, [count]);
  

  
  const handleSearch= (e) => {
    return arr.filter((item) => item.includes(count));
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

export default App2
