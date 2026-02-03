import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Plus":
      return state + 1;
    case "Minus":
      return state - 1;
    case "Reset":
      return 0;
    case "Plus5":
      return state + 5;
    default:
      return state;
  }
};
const reducer2 = (arr, action) => {
  switch (action.type) {
    case "AddTodo":
      return [
        ...arr,
        { text: action.payload, id: Date.now(), completed: false },
      ];
    case "RemoveTodo":
      return arr.filter((item) => item.id !== action.payload);
    case "CompleteTodo":
      return arr.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    default:
      return arr;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [arr, dispatch2] = useReducer(reducer2, []);
  let inp = "";

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "Plus" })}>+</button>
      <button onClick={() => dispatch({ type: "Minus" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "Plus5" })}>Add Five</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch2({ type: "AddTodo", payload: inp });
          inp = "";
        }}
      >
        <input type="text" onChange={(e) => (inp = e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {arr.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() =>
                dispatch2({ type: "RemoveTodo", payload: item.id })
              }
            >
              Remove Todo
            </button>
            <button
              onClick={() =>
                dispatch2({ type: "CompleteTodo", payload: item.id })
              }
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
