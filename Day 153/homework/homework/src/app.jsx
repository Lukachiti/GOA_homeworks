import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

function Func1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <button onClick={() => {setCount(count - 1)}}>-</button>
    </>
      
  )
}


function Func2() {
  const [buli, setBuli] = useState(false)

  return (
    <>
      <h1>{buli ? "hello" : "hello react"}</h1>
      <button onClick={() => {if(buli){
        setBuli(false)
      }
      else{
        setBuli(true)
      }}}>change</button>
      
    </>
      
  )
}
function Func3() {
  const [buli, setBuli] = useState(false)

  return (
    <>
      <h1>{buli ? "OFF" : "ON"}</h1>
      <button onClick={() => {if(buli){
        setBuli(false)
      }
      else{
        setBuli(true)
      }}}>change</button>
      
    </>
      
  )
}

function Func4() {
  const [inp, setInp] = useState("")

  return (
    <>
      <h1>u typed : {inp}</h1>
      <input type='text' onInput={(e) => {setInp(e.target.value)}}></input>
      
    </>
      
  )
}

function Func5() {
  const [inp, setInp] = useState("")

  return (
    <>
      <h1>hello {inp}</h1>
      <input type='text' onInput={(e) => {setInp(e.target.value)}}></input>
      
    </>
      
  )
}





export function App(){
  return (
    <>
      <Func1 />
      <Func2 />
      <Func3 />
      <Func4 />
      <Func5 />
    </>
  )
}
