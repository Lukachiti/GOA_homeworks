import { useState } from "react";

import "./App.css";

function Scores(obj) {

    const total = () => {
        let sum = 0
        for(let i of obj.students){
            i.score > 51 ? sum += 1 : sum += 0
        }
        return sum
    }
  return (
    <>
      <h4>Passed: {total()}</h4>
      
      {obj.students.filter((i) => (i.score > 51))
      .map((i) => (
        <div>
          <h2>{i.name}</h2>
          <p>{i.score}</p>
          
        </div>
      ))}
    </>
  );
}

export default Scores;
