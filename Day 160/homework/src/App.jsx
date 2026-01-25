import { useState } from "react";
import { useId } from "react";
import "./App.css";
import App2 from "./App2";
import App3 from "./App3";

function App() {
  
  const id = useId();
  
  return (
    <>
      <form id={id}>
        <input type="text" id={id} />
      </form>
      <br></br>
      <App2 id={id} type="text" label="im a label" />
      <App3 />
    </>
  );
}

export default App;
