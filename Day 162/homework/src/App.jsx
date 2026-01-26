import { createContext, useContext, useState } from "react";
import { App3 } from "./App2.jsx";
import { App4 } from "./App2.jsx";
import { App5 } from "./App2.jsx";
import { App6 } from "./App2.jsx";
import { App7 } from "./App2.jsx";
import "./App.css";
import App2 from "./App2.jsx";
export const Context1 = createContext();
export const Context2 = createContext();
export const Context3 = createContext();
export const Context4 = createContext();
export const Context5 = createContext();
export const Context6 = createContext();

function App() {
  const text = "Hello Context";
  const num = 10;
  const color = "red";
  const user = { name: "Luka"};
  const bool = false;
  return (
    <>
      <Context1.Provider value={text}>
        <App2 />
      </Context1.Provider>
      <Context2.Provider value={num}>
        <App3 />
      </Context2.Provider>
      <Context3.Provider value={color}>
        <App4 />
      </Context3.Provider>
      <Context4.Provider value={user}>
        <App5 />
      </Context4.Provider>
      <Context5.Provider value={bool}>
        <App6 />
      </Context5.Provider>
      <Context5.Provider value={bool}>
        <App6 />
      </Context5.Provider>
      <Context6.Provider value={"Click me"}>
        <App7 />
      </Context6.Provider>
    </>
  );
}

export default App;
