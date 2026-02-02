import { createContext, useState } from 'react'
import App2 from './App2'
import { App3 } from './App2'
import { App4 } from './App2'
import { App5 } from './App2'

import './App.css'

export const colorContext = createContext()
export const fontsizeContext = createContext()
export const roleContext = createContext()
export const appTitleContext = createContext()
function App() {
  

  return (
    
    <colorContext.Provider value={"blue"}>
      <fontsizeContext.Provider value={"10px"}>
        <roleContext.Provider value={"admin"}>
          <appTitleContext.Provider value={"My App"}>
            <App2 />
            <App3 />
            <App4 />
            <App5 />
          </appTitleContext.Provider>
        </roleContext.Provider>
      </fontsizeContext.Provider>
    </colorContext.Provider>
  )
}

export default App
