import { useState } from "react";
import { useId } from "react";
import "./App.css";

function App2(props) {
  
  
  return (
    <>
      <form id={props.id}>
        <label>{props.label}</label>
        <input type={props.type} id={props.id} />
        <br></br>
        <br></br>
        <label>green</label>
        <input id={props.id + "green"} type="checkbox"></input>
        <label>red</label>
        <input id={props.id + "red"} type="checkbox"></input>
        <label>blue</label>
        <input id={props.id + "blue"} type="checkbox"></input>
      </form>
      
    </>
  );
}

export default App2;
