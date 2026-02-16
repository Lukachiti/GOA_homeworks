import { useState } from "react";
import array from "./Arr.Js";
import "./App.css";

function App() {
  const [arr, setArr] = useState(array);
  const [cart, setCart] = useState([]);

  const handle = (i) => {
    for (let k of arr) {
      if (k.id == i && cart.includes(k)) {
        setCart(cart);
      } else if (k.id == i && !cart.includes(k)) {
        setCart([...cart, k]);
      }
    }
  };

  const handleDelete = (i) => {
    setCart(cart.filter((item) => item.id != i));
  };

  return (
    <>
      <div>
        {arr.map((i) => (
          <div key={i.id}>
            <img src={i.imageUrl} />
            <h2>{i.name}</h2>
            <p>{i.description}</p>
            <p>Price {i.price}</p>
            <p>Rating {i.rating}</p>
            <button onClick={() => handle(i.id)}>Add</button>
          </div>
        ))}

        <hr />

        <div>
          {cart.map((i) => (
            <div key={i.id}>
              <img src={i.imageUrl} />
              <h2>{i.name}</h2>
              <p>{i.description}</p>
              <p>Price {i.price}</p>
              <p>Rating {i.rating}</p>
              <p>Quantity: 1</p>
              <button onClick={() => handleDelete(i.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
