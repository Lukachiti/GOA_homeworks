import { useState } from 'react'

import './App.css'

function Password(inpu) {
  

  return (
    <>
      <h4>Length: {inpu.input.length}, Contains number:{String(/\d/.test(inpu.input))}</h4>
    </>
  )
}

export default Password
