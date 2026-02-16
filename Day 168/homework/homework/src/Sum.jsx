import { useEffect, useState } from "react";

import "./App.css";

function Sum(prop) {
    const [sum, setSum] = useState(0)
  useEffect( () => {
    setSum(Number(prop.num1) + Number(prop.num2))
  }, [prop.num1, prop.num2])
  return (
    <>
      <h2>Sum: {sum}</h2>
      
    </>
  );
}

export default Sum;
