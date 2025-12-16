import { useState } from "react"

function App() {
  const [cnt, setCnt] = useState(0)

  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={() => {setCnt(cnt + 3.1415)}}>+</button>
      <button onClick={() => {setCnt(cnt - 3.1415)}}>-</button>
    </>

  )

}

export default App
