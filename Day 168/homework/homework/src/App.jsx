import { useState } from "react";
import H2 from "./H2";
import Price from "./Price";
import Sum from "./Sum";
import Length from "./Length";
import Grade from "./Grade";
import "./App.css";

function App() {
  const obj = [
    { name: "Asus ROG 5090", price: 4999 },
    { name: "Radeon 9070 xt", price: 2499 },
    { name: "Rock", price: 1 },
    { name: "Nothing", price: 0 },
    { name: "Brainrot", price: 67 },
  ];
  const Students = [
    { name: "Ben Dover", grade: 10 },
    { name: "Mike Hawk", grade: 8 },
    { name: "Mike Ockslong", grade: 6 },
    { name: "Ur Mom", grade: 10 },
    { name: "Undefined", grade: 0 },
  ];
  const [input, setInput] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [inp, setInp] = useState("");
  const [arr, setArr] = useState([]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <H2 input={input} />
      </div>
      <div>
        {obj.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
        <Price obj={obj} />
      </div>
      <div>
        <input
          type="number"
          placeholder="first num"
          onChange={(e) => {
            setNum1(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="second num"
          onChange={(e) => {
            setNum2(e.target.value);
          }}
        />
        <Sum num1={num1} num2={num2} />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter"
          onChange={(e) => {
            setInp(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setArr([...arr, inp]);
          }}
        >
          Submit
        </button>
        <h4>
          {arr.map((i) => (
            <p>{i}</p>
          ))}
        </h4>
        <Length arr={arr} />
      </div>
      <div>
        {Students.map((i) => (
          <div>
            <h2>{i.name}</h2>
            <p>grade:{i.grade}</p>
          </div>
        ))}
        <Grade Students={Students}/>
      </div>
    </>
  );
}

export default App;
