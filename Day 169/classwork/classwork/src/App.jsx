import { useState } from "react";
import array from "./Arr.Js";
import "./App.css";

function App() {
  const [arr] = useState(array);
  const [cart, setCart] = useState([]);

  const handle = (id) => {
    const product = arr.find((item) => item.id === id);
    if (product && !cart.some((item) => item.id === id)) {
      setCart([...cart, product]);
    }
  };

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">

     
      <div className="notCart">
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
      </div>

      
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((i) => (
          <div key={i.id}>
            <img src={i.imageUrl} />
            <h2>{i.name}</h2>
            <p>Price {i.price}</p>
            <button onClick={() => handleDelete(i.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;