import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");

  useEffect(() => {
    const timeou = setTimeout(() => {
      setCount2(count);
    }, 1000);
    return () => clearTimeout(timeou)
  }, [count]);
  

  useEffect(() => {
    console.log(count2);
  }, [count2]);
      

  return (
    <>
      <input
        type="text"
        placeholder="enter"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      ></input>
    </>
  );
}

export default App;
