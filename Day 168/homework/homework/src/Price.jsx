import { useState } from "react";

import "./App.css";

function Price(prop) {
  let price1 = 0
    for(let i of prop.obj){
        price1 += i.price
    }
  return (
    <>
      <h2>ToTal {price1}</h2>
      
    </>
  );
}

export default Price;
