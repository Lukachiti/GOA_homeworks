import { useState } from "react";

import "./App.css";

function Search(produ) {
  return (
    <>
      {produ.products
        .filter((i) => i.name.includes(produ.input2))
        .map((i) => (
          <div>
            <h2>{i.name}</h2>
            <p>{i.description}</p>
          </div>
        ))}
    </>
  );
}

export default Search;
