import { useState } from "react";
import App2 from "./App2";
import { App3 } from "./App2";
import { App4 } from "./App2";
import { App5 } from "./App2";
import { App6 } from "./App2";
import "./App.css";
import { createContext } from "react";

export const themeContext = createContext();
export const userContext = createContext();
export const lagungeContext = createContext();
export const authContext = createContext();
export const counterContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "Jemaliko" });
  const [language, setLanguage] = useState("kartuli");
  const [isAuth, setIsAuth] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <userContext.Provider value={{ user, setUser }}>
          <counterContext.Provider value={{ counter, setCounter }}>
          <authContext.Provider value={{ isAuth, setIsAuth }}>
          <lagungeContext.Provider value={{ language, setLanguage }}>
            <App2 />
            
            <App3 />
            <App4 />
            <App5 />
            <App6 />
            
          </lagungeContext.Provider>
          </authContext.Provider>
          </counterContext.Provider>
        </userContext.Provider>
      </themeContext.Provider>
    </>
  );
}

export default App;
