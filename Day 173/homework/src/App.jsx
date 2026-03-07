import { useState } from 'react'
import { useCount } from './useCount'
import { useShow } from './useShow'
import { useDark } from './useDark'
import { useSidebar } from './useSidebar'
import './App.css'

function App() {
  //with custom hooks you can create your own hooks and reuse them in your components
  const { count, increment, decrement, reset, negativeLock, toggleNegativeLock } = useCount()
  const { isDark, toggleDark } = useDark()
  const { show, toggleShow } = useShow()
  const { isOpen, toggleSidebar } = useSidebar()
  if (negativeLock && count < 0) {
    increment()
  }
  if (isDark) {
    document.body.style.backgroundColor = '#333'
    document.body.style.color = '#fff'
  } else {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#333'
  }
  return (show) ? (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggleNegativeLock}>
        {negativeLock ? 'Unlock Negative' : 'Lock Negative'}
      </button>
      <button onClick={toggleShow}>Hide Counter</button>
      <button onClick={toggleDark}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      {isOpen && <div className="sidebar">Sidebar Content</div>}
    </>
  ) : (
    <button onClick={toggleShow}>Show Counter</button>
  )
}

export default App
