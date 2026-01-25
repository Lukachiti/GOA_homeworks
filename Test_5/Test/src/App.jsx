import { use, useState } from "react";
import { useId } from "react";

import "./App.css";

function App() {
  const [current, setCurrent] = useState("");
  const [arr, setArr] = useState([]);
  
  console.log(arr);
  return (
    <>
      <input
        className="bg-gray-600"
        type="text"
        onChange={(e) => {
          setCurrent(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setArr([...arr].concat([{ str: current}]));
        }}
      >
        add
      </button>
      <div>
        {arr
          
          .map((item, key) => (
            <div key={key}>
              <p key={key}>{item.str}</p>
              <button
                onClick={() => {
                  setArr([...arr].filter(i => key != arr.indexOf(i)));
                }}
              >
                delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
