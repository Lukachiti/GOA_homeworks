import { useState } from "react"

export function useCount() {
  const [count, setCount] = useState(0)
  const [negativeLock, setNegativeLock] = useState(true)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    } 
    function reset() {
        setCount(0)
    }
    function toggleNegativeLock() {
        setNegativeLock(!negativeLock)
    }
    return {
        count,
        increment,
        decrement,
        reset,
        negativeLock,
        toggleNegativeLock
    }
}
    
