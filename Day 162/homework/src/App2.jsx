import { useContext, useState } from "react";
import { Context1 } from "./App.jsx";
import { Context2 } from "./App.jsx";
import { Context3 } from "./App.jsx";
import { Context4 } from "./App.jsx";
import { Context5 } from "./App.jsx";
import { Context6 } from "./App.jsx";
import "./App.css";

function App2() {
  const text1 = useContext(Context1);

  return (
    <>
      <div>{text1}</div>
    </>
  );
}
export function App3() {
  const num = useContext(Context2);
  return (
    <>
      <div>number is:{num}</div>
    </>
  );
}
export function App4() {
  const color = useContext(Context3);
  return (
    <>
      <div style={{ color: color }}>color</div>
    </>
  );
}
export function App5() {
  const nam = useContext(Context4);
  return (
    <>
      <div>my name is: {nam.name}</div>
    </>
  );
}
export function App6() {
  const bool = useContext(Context5);
  return (
    <>
      <div>{bool ? "On" : "Off"}</div>
    </>
  );
}
export function App7() {
  const butt = useContext(Context6);
  return (
    <>
      <button>{butt}</button>
    </>
  );
}

export default App2;
