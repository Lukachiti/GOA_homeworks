import { useState } from "react";
import "./Intro.css";

function Intro() {
  return (
    <>
      <div className="container">
        <div className="intro-text">
          <h1 className="intro-h1">Welcome to our website</h1>
          <p className="intro-p">
            Where we Invent, Build and Present Our
            Projects. Here youll see our latest innovations and achievements.
          </p>
          <button onClick={() => {  document.getElementById("Facecontainer").scrollIntoView({
    behavior: "smooth"
  });}} className="intro-button">Check out</button>
        </div>
      </div>
    </>
  );
}

export default Intro;
