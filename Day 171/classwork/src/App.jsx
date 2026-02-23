import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const divRef = useRef(null)
  const inpRef = useRef(null)
  const pRef = useRef(undefined)
  return (
    <>
      <div ref={divRef} style={{width: "100px", height: "100px"}}>hi</div>
      <button onClick={() => {divRef.current.style.backgroundColor = "red"}} >reden</button>
      <input type='text' placeholder='enter' ref={inpRef}/>
      <button onClick={inpRef.current.select()} >select</button>
      <p ref={pRef} >text</p>
      <button onClick={() => {pRef.current.style.backgroundColor = "yellow"}}>yellow</button>
    </>
  )
}

export default App
