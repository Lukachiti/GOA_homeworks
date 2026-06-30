import useGlobalStore from "./useGlobalStore";
import React from 'react';
function App() {
  const {
    theme,
    toggleTheme,
    count,
    increment,
    username,
    setUsername,
    todos,
    addTodo,
  } = useGlobalStore();

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h1>მომხმარებელი: {username || "სტუმარი"}</h1>
      <button onClick={() => setUsername("გიორგი")}>შესვლა</button>

      <hr />

      <p>თემა: {theme}</p>
      <button onClick={toggleTheme}>თემის შეცვლა</button>

      <hr />

      <p>ქაუნთერი: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
export default App;
