import React, { useEffect } from "react";
import { useState, useRef } from "react";

function App() {
  useEffect(() => {
    console.log("site has rerendered");
  });
  console.log(useRef);
  const [count1, setCount1] = useState(0);
  let count = useRef(0);
  const helper = () => {
    count.current += 1;
    console.log(count);
  };
  const helper1 = () => {
    setCount1(count1 + 1);
    console.log(count);
  };

  return (
    <>
      <h1>hello world</h1>
      <button onClick={helper}>Click</button>
      <button onClick={helper1}>Click2</button>
    </>
  );
}

export default App;
