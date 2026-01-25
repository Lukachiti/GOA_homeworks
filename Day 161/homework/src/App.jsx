import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name2, setName2] = useState("");
  const [erro, setErro] = useState("");
  const [multi, setMulti] = useState({
    name: "",
    email: "",
    age: 0,
  });
  const checkbox = document.querySelector('input[type="checkbox"]');
  const alert1 = `Name: ${name}, Email: ${email}`;

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <h2>name: {name}</h2>
      </form>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>i agree</label>
        <input type="checkbox" />
        <button
          value={email}
          type="submit"
          onClick={() => {
            if(checkbox.checked === false){
              alert("You must agree before submitting.");
              email.preventDefault();
            } else {
              alert(alert1);
              email.preventDefault();
          }
          }}
        >
          Submit
        </button>

      </form>
      <form>
        <input onChange={(e) => setName2(e.target.value)} type="text" placeholder="Name" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button onClick={() => {
          if(name2.length == 0){
            setErro("Name is required");
          } else if(password.length == 0){
            setErro("Password must be at least 1 character");
          } else {
            setErro("Form submitted successfully");
          }
        }} >Submit</button>
        <p>{erro}</p>
      </form>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setMulti((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setMulti((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) =>
            setMulti((prev) => ({
              ...prev,
              age: e.target.value,
            }))
          }
        />
        <h2>
          Name: {multi.name}, Email: {multi.email}, Age: {multi.age}
        </h2>
      </form>
    </>
  );
}

export default App;
