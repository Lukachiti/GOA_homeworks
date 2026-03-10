import useLocalStorage from "./useLocalStorage";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useLocalStorage("username", "Guest");
  const [theme, setTheme] = useLocalStorage("app-theme", "light");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [user, setUser] = useState({
    name: "გიორგი",
    age: 25,
    city: "თბილისი"
  });

  const updateCity = () => {
    setUser((prevUser) => ({
      ...prevUser,       
      city: "ბათუმი"     
    }));
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target; 

    setFormData((prevData) => ({
      ...prevData,      
      [name]: value    
    }));
  };

  
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
    <div>
      <h2>u are {name}!</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <h2>Theme: {theme == "light" ? "light" : "dark"}</h2>
      <button onClick={toggleTheme}>
       {theme == "light" ? "dark" : "light"} Mode
      </button>
    </div>
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      
      <form>
        <div>
          <label>name:</label>
          <input
            type="text"
            name="name" 
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

       
      </form>

      <div>
        <p>result:</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>
    </div>
    <div>
      
      <p><strong>name:</strong> {user.name}</p>
      <p><strong>age:</strong> {user.age}</p>
      <p><strong>city:</strong> {user.city}</p>
      
      <button onClick={updateCity}>Update City</button>
    </div>
    </>
  );
}

export default App;