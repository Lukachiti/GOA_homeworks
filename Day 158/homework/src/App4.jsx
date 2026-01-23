import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'
import { use } from 'react'

function App4() {
  const [datai, setDatai] = useState([])
  const [inpu, setInPu] = useState("")
  
  useEffect(() => {
    const fetc = async () => {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await resp.json()
        console.log(data)
        setDatai(data)
        
        
      }
      catch (error){
        console.error('Error fetching data:', error);
      }
      
    }
    fetc()
  }, [])
    
  return (
    <>
      <div>
        
        {datai.map(i => [<h2>{i.title}</h2>, <button onClick={() => {i.id = 0}} >delete</button>])}
        
      </div>
    </>
  )
}

export default App4

