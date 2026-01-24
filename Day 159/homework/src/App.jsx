import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <>
      <nav>
        <div>
          <div>
            <img src="" alt="" />
            <h1>Typing Speed Test</h1>
            <p>Type as fast as you can in 60 seconds</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Personal best:</p>
            <h5>92 WPM</h5>
          </div>
        </div>
        <div>
          <div><p>WPM:</p><h4>40</h4></div>
          <div><p>Accuracy:</p><h4>94%</h4></div>
          <div><p>Time:</p><h4>0:46</h4></div>
          <div><p>Difficulty:</p><button>Easy</button><button>Medium</button><button>Hard</button></div>
          <div><p>Mode:</p><button>Timed(60s)</button><button>Passage</button></div>

        </div>
      </nav>
    </>
  )
}

export default App
