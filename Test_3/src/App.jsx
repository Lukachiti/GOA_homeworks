import { useState } from "react"

function App() {
  const [cnt, setCnt] = useState(0)

  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={() => {setCnt(cnt + 1)}}>+</button>
      <button onClick={() => {setCnt(cnt - 1)}}>-</button>
    </>

  )

}

export default App
