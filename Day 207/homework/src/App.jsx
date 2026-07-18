import { useState, useEffect } from "react";
import axios from "axios"; // Change 1: Added import
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  
  
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:5000/users");
      setData(response.data);
    })();
  }, []);

  return (
    <>
      <p>{data}</p>
    </>
  );
}

export default App;
