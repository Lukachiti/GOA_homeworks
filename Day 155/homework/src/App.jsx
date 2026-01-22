import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)
  const [inpu, setInpu] = useState("")
  const [date, setDate] = useState("")

  return (
    <>
    <div>
      <h1>{bool ? count : ""}</h1>
      <button onClick={() => {setCount(count + 1)}} >increase</button>
      <button onClick={() => {setCount(count - 1)}} >decrease</button>
      <button onClick={() => {setCount(0)}} >rst</button>
      <button onClick={() => {setBool(bool ? false : true)}} >show/hide</button>
    </div>
    <br></br> 
    <div>
      <input type="text" placeholder='enter ტექსტი' onInput={(e) => {setInpu(e.target.value)}} />
      <h2>u typed:{inpu}</h2>
    </div>
    <div>
      <button onClick={() => {setDate(new Date().toString().split(" ")[4].split(":")[0])}} >greet</button>
      <h2>{date > 12 ? "good evening" : "good morning"}</h2>
    </div>


      

    </>
  )
}

export default App
