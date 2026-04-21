import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [resp, setResp] = useState()
  
  let key: string = "5ebbc389cb15686ea9b2130f8fcb360c";

  
  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={5ebbc389cb15686ea9b2130f8fcb360c}`,


    );

    if (!response.ok) {
      throw new Error("LOL api not valid lil bro");
    }

    let data = await response.json()
   
    setResp(data)
  };
  fetchData()
  }, []);
  console.log(resp)

  return <>
  
  </>;
}

export default App;
