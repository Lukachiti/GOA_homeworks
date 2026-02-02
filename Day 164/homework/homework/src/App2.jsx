import { useState } from 'react'
import { useContext } from 'react'
import { colorContext, roleContext } from './App'
import { fontsizeContext } from './App'
import { appTitleContext } from './App'
import './App.css'

function App2() {
    const color = useContext(colorContext)

  return (
    <>
        <h1 style={{ color: color }}>this text is {color}</h1>
    </>
  )
}

export default App2

export function App3() {
    const fontsize = useContext(fontsizeContext)

  return (
    <>
        <h1 style={{ fontSize: fontsize }}>this text is small</h1>
    </>
  )
}
export function App4() {
    const role = useContext(roleContext)

  return (
    <>
        <h1>{role === "admin" ? "You are an admin!" : "You are not an admin."}</h1>
    </>
  )
}
export function App5() {
    const appTitle = useContext(appTitleContext)

  return (
    <>
        <header>{appTitle}</header>
    </>
  )
}