import { useState } from "react";

import "./App.css";

function Cart(obj) {

    const total = () => {
        let sum = 0
        for(let i of obj.products){
            sum += i.price
        }
        return sum
    }
  return (
    <>
      <h4>Length: {obj.products.length}</h4>
      <h4>Price Total: {total()}</h4>
      {obj.products.map((i) => (
        <div>
          <h2>{i.name}</h2>
          <p>{i.description}</p>
          <p>Price: {i.price}</p>
          <p>Rating: {i.rating}</p>
          <img style={{width:"200px"}} src={i.imageUrl}></img>
        </div>
      ))}
    </>
  );
}

export default Cart;
