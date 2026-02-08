import { useEffect, useState } from "react";
import {arr} from "./Actualslideshow.js";
import "./Slideshow.css";

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % arr.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slideshow-container">
      <div
        className="slides-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {arr.map((img, i) => (
          <div
            className="slide"
            key={i}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="slideshow-content">
        <h1>Join us</h1>
        <p>To be a part of our innovative projects</p>
      </div>
    </section>
  );
}

export default Slideshow;