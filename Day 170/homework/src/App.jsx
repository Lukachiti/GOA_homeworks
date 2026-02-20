import { useRef, useState } from "react";

import "./App.css";

function App() {
  const inpRef = useRef(null);
  const pRef = useRef(null);
  const p2Ref = useRef(null);
  const divRef = useRef(null);
  const inp2Ref = useRef(null);
  return (
    <>
      <div>
        <input ref={inpRef} placeholder="Enter sth" />
        <button
          onClick={() => {
            inpRef.current.focus();
          }}
        >
          Focus
        </button>
      </div>
      <div>
        <p ref={pRef}>text</p>
        <button
          onClick={() => {
            pRef.current.style.color = "red";
          }}
        >
          change color
        </button>
      </div>
      <hr></hr>
      <div ref={divRef}>
        <button
          onClick={() => {
            divRef.current.style.width = "500px";
          }}
        >
          change width
        </button>
      </div>
      <div>
        <input ref={inp2Ref} placeholder="faaah"></input>
        <button
          onClick={() => {
            inp2Ref.current.value = "";
          }}
        >
          Delete value
        </button>
      </div>
      <div>
        <p ref={p2Ref}>text</p>
        <button
          onClick={() => {
            p2Ref.current.style.display = "none";
          }}
        >
          change reality
        </button>
      </div>
    </>
  );
}

export default App;
