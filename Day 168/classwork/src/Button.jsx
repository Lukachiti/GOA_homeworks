import { useState } from "react";

import "./App.css";

function Button(info) {
    
  return (
    <>
      <button
        
        onClick={() => {info.toggle(info.id)}}
        style={{
          background: info.color,
          opacity: info.on ? 1 : 0.4,
        }}
      >
        Button
      </button>
      
    </>
  );
}

export default Button;
