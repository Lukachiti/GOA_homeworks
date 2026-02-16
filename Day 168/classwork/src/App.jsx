import { useState } from "react";
import Button from "./Button";
import "./App.css";
const buttonData = [
  { id: 1, color: "red", on: true },
  { id: 2, color: "blue", on: true },
  { id: 3, color: "green", on: true },
  { id: 4, color: "yellow", on: true },
  { id: 5, color: "purple", on: true },
  { id: 6, color: "orange", on: true },
  { id: 7, color: "pink", on: true },
  { id: 8, color: "black", on: true },
];

function App() {
  const toggle = (id) => {
    setButtons(prev => prev.map((item)=>(
      item.id === id ? {...item, on: !item.on} : item
    )))
  };
  const toggleAll = () => {
    setButtons(prev => prev.map((item)=>(
      {...item, on: !item.on}
    )))
  };

  const [buttons, setButtons] = useState(buttonData);

  return (
    <>
      {buttons.map((item) => (
        <Button
          color={item.color}
          toggle={toggle}
          
          on={item.on}
          key={item.id}
          id={item.id}
        />
      ))}
      <button onClick={toggleAll}>All</button>
    </>
  );
}

export default App;
