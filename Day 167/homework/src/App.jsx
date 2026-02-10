import { useReducer, useState } from "react";
import { products } from "./arr";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];

    case "Remove":
      return state.filter((item) => item.id !== action.payload);

    case "ToggleStock":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, stock: item.stock > 0 ? 0 : 1 }
          : item
      );

    default:
      return state;
  }
}

function reducer2(state2, action) {
  switch (action.type) {
    case "AddToCart":
      return [...state2, action.payload];

    case "RemoveFromCart":
      return state2.filter((item) => item.id !== action.payload);

    case "PlusStock":
      return state2.map((item) =>
        item.id === action.payload
          ? { ...item, stock: item.stock + 1 }
          : item
      );

    case "MinusStock":
      return state2.map((item) =>
        item.id === action.payload && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item
      );

    default:
      return state2;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, products);
  const [state2, dispatch2] = useReducer(reducer2, []);
  const [filterType, setFilterType] = useState("All");
  const [categoriesOn, setCategoriesOn] = useState(false);
  const [category, setCategory] = useState("Electronics");
  const [priceFilter, setPriceFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredProducts = state
    .filter((item) =>
      search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
    )
    .filter((item) => (categoriesOn ? item.category === category : true))
    .filter((item) => (filterType === "Stock" ? item.stock > 0 : true))
    .filter((item) => {
      if (priceFilter === "0-100") return item.price <= 100;
      if (priceFilter === "100-500")
        return item.price > 100 && item.price <= 500;
      if (priceFilter === "500+") return item.price > 500;
      return true;
    });

  return (
    <>
      <button onClick={() => setFilterType("Stock")}>Sort By Stock</button>
      <button onClick={() => setFilterType("All")}>All</button>
      <button onClick={() => setCategoriesOn(!categoriesOn)}>
        Categories on/off
      </button>

      <br />

      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Clothing")}>Clothing</button>
      <button onClick={() => setCategory("Home")}>Home</button>
      <button onClick={() => setCategory("Accessories")}>Accessories</button>

      <hr />

      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />

      <button onClick={() => setPriceFilter("ALL")}>All Prices</button>
      <button onClick={() => setPriceFilter("0-100")}>0-100</button>
      <button onClick={() => setPriceFilter("100-500")}>100-500</button>
      <button onClick={() => setPriceFilter("500+")}>500+</button>

      <hr />

      <button
        onClick={() =>
          dispatch({
            type: "Add",
            payload: {
              id: Date.now(),
              name: "New Product",
              price: 200,
              category: "Electronics",
              rating: 4,
              stock: 1,
            },
          })
        }
      >
        Add Product
      </button>

      <hr />

      {filteredProducts.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          <p>Rating: {item.rating} Stars</p>
          <p>{item.stock > 0 ? "In Stock" : "Sold Out"}</p>

          <button onClick={() => dispatch({ type: "Remove", payload: item.id })}>
            Delete
          </button>

          <button
            onClick={() => dispatch({ type: "ToggleStock", payload: item.id })}
          >
            Toggle Stock
          </button>

          <button
            onClick={() =>
              dispatch2({ type: "AddToCart", payload: { ...item } })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />
      <h2>Cart</h2>

      {state2.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Stock: {item.stock}</p>

          <button
            onClick={() =>
              dispatch2({ type: "RemoveFromCart", payload: item.id })
            }
          >
            Remove
          </button>

          <button
            onClick={() =>
              dispatch2({ type: "PlusStock", payload: item.id })
            }
          >
            + Stock
          </button>

          <button
            onClick={() =>
              dispatch2({ type: "MinusStock", payload: item.id })
            }
          >
            - Stock
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
