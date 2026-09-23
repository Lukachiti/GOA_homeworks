import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        newProduct,
      );
      setProducts([...products, response.data]);
      setNewProduct({ name: "", price: "", category: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.name.toLowerCase().includes(inputValue.toLowerCase())).filter((product) => categoryFilter === "" || product.category === categoryFilter)  
    );
  }, [inputValue, products, categoryFilter]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2>Shop for products</h2>
      <input
        type="text"
        placeholder="Product name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Apparel">Apparel</option>
        <option value="Fitness">Fitness</option>
        <option value="Stationery">Stationery</option>
        <option value="Books">Books</option>
        <option value="Personal Care">Personal Care</option>
      </select>

      {filteredProducts.map((product, index) => (
        <>
          <div key={index}>{product.name}</div>
          <div key={index}>{product.price}</div>
          <div key={index}>{product.category}</div>
          <button>Add to Cart</button>
        </>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct();
        }}
      >
        <input
          type="text"
          placeholder="Product name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default App;
