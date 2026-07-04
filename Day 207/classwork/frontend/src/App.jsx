import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const fetchUsers = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = () => {
    const res = axios.post("http://localhost:3000/users", {
      name: name,
      age: age,
    });
    setUsers(prev => [...prev, res])
    // const res = fetch("http://localhost:3000/users", {
    //   method : "POST",
    //   headers: {"Content-Type":"Application/json"},
    //   body : JSON.stringify({
    //     name: name,
    //     age: age
    //   })
    // })
    // if(!res.ok){
    //   throw new Error ("racxa moxta")
    // }

    // const newUser = res.json();
    // setUsers((prev) => [...prev, newUser]);

  };

  return (
    <>
      <input
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        placeholder="Age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
        value={age}
      />
      <button onClick={addUser}>Add</button>
    </>
  );
}

export default App;
