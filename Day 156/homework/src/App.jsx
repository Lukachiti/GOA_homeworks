import { useState } from 'react'
import { FaCookieBite } from "react-icons/fa";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cukis, setCukis] = useState([])
  const [bool, setBool] = useState(true)
  const [bool2, setBool2] = useState(true)
  const [gamble, setGamble] = useState(0)
  const [count3, setCount3] = useState(0)
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <br></br>
      <br></br>
      <div>
        <h1>{cukis}</h1>
        <button onClick={() =>{setCukis([...cukis].concat([<FaCookieBite />]))}} >add cookie</button>
      </div>
      <div>
        <h1>{bool ? "5060 8gb" : ""}</h1>
        <button onClick={() => {bool ? setBool(false) : setBool(true)}}>make a 2000$ card disappear</button>
      </div>
      <div>
        <h1 id='i'>{bool2 ? "ON" : "OFF"}</h1>
        <button onClick={() => {bool2 ? setBool2(false) : setBool2(true)}}>On/Off</button>
      </div>
      <div>
        <h1>{gamble == 7 ? "you won" : ""}</h1>
        <h2>{gamble}</h2>
        <button onClick={() => {setGamble(Math.floor(Math.random() * 11))}} >gamble</button>
      </div>
      <div>
        <h1>{count3} {count3 == 10 ? "limit reached" : ""}</h1>
        <button onClick={() => {count3 != 10 ? setCount3(count3 + 1) : setCount3(count3)}}>+</button>
      </div>

    </>

  )
}

export default App
