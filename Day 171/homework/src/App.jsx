import { useRef, useState } from "react";

import "./App.css";

function App() {
  let prevRef = useRef(null);
  const [count, setCount] = useState(0);
  let inpRef = useRef(null);
  const [inp, setInp] = useState("");
  let clickRef = useRef(null);

  let prev2Ref = useRef(null);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <h2>Previous: {prevRef.current}</h2>
      <h2>Current: {count}</h2>
      <button
        onClick={() => {
          prevRef.current = count;
          setCount(count + 1);
        }}
      >
        +
      </button>
      <input
        type="text"
        onChange={(e) => {
          inpRef.current = inp;
          setInp(e.target.value);
        }}
      ></input>
      <h2>Prev: {inpRef.current}</h2>
      <h2>Curr: {inp}</h2>
      <button
        onClick={() => {
          clickRef.current += 1;
          console.log(clickRef.current)
        }}
      >
        Click
      </button>

      <h2 style={{color: prev2Ref.current % 2 == 0 ? "red" : "blue"}}>Previous</h2>
      <h2 style={{color: count2 % 2 == 0 ? "red" : "blue"}}>Current</h2>
      <button
        onClick={() => {
          prev2Ref.current = count2;
          setCount2(count2 + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
