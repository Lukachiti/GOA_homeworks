import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "./App";
import { userContext } from "./App";
import { lagungeContext } from "./App";
import { authContext } from "./App";
import { counterContext } from "./App";
import "./App.css";

function App2() {
  const { theme } = useContext(themeContext);

  return (
    <>
      <p>Current theme: {theme}</p>
    </>
  );
}

export default App2;

export function App3() {
  const { user } = useContext(userContext);

  return (
    <>
      <p>Hello {user.name}</p>
    </>
  );
}

export function App4() {
  const { language } = useContext(lagungeContext);

  return (
    <>
      <p>{language == "kartuli" ? "გამარჯობა" : "hello"}</p>
    </>
  );
}

export function App5() {
  const { isAuth } = useContext(authContext);

  return (
    <>
      <p>{isAuth ? "მომხმარებელი შესულია" : "გთხოვთ დალოგინდე"}</p>
    </>
  );
}
export function App6() {
  const { counter } = useContext(counterContext);

  return (
    <>
      <p>Counter is: {counter}</p>
    </>
  );
}
