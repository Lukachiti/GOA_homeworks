import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [inp, setInp] = useState("");
  const [info, setInfo] = useState({})
  useEffect(() => {
    const getdata = async () => {
    let data = await fetch(`https://api.github.com/users/Lukachiti`);
    let data2 = await data.json();
    console.log(data2);

    setInfo(data2)
  }
  getdata()
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Enter text here"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={async () => {
    let data = await fetch(`https://api.github.com/users/${inp}`);
    let data2 = await data.json();
    console.log(data2);
    setInfo(data2)
    
  }} >send</button>
  <Card info={info}/>
    </>
  );
}

export default App;
