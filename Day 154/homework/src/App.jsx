import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cnt, setCnt] = useState(0)
  const [arr, setarr] = useState([])
  const [arr1, setarr1] = useState([])
  const [arr2, setarr2] = useState([1, 2, 3, 4])

  useEffect(() => {
    console.log("mounted")
  }, [])
  useEffect(() => {
    document.title = "first usefct"
  }, [])
  useEffect(() => {
    console.log("cnt changed")
  }, [cnt])
  useEffect(() => {
    setTimeout(() => {
      console.log("hi after 2 secs")
    }, 2000); 
  }, [])
  useEffect(() => {
    console.log("changed")
  }, [arr])
  useEffect(() => {
    console.log("charged")
  }, [arr1])

  return (
    <>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTlufalNB63-I5EM4EgabCDEVQiihePnIHg&s" alt="" />
      <p>{arr}</p>
      <button onClick={() => {setCnt(cnt + 1)}}>+</button>
      <button onClick={() => {setarr([...arr, "new task"])}}>add</button>
      <p>{arr1}</p>
      <button onClick={() => {setarr1([...arr1, {name: "User" }])}}>add1</button>
      
      
    </>
  )
}

export default App
