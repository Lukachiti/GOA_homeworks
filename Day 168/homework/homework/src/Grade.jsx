import { useState } from "react";

import "./App.css";

function Grade(prop) {
  let sum = 0
    for(let i of prop.Students){
        sum = sum + i.grade
    }
  return (
    <>
      <h2>{sum / prop.Students.length}</h2>
      
    </>
  );
}

export default Grade;
