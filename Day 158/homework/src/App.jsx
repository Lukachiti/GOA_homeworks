import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'

function App() {
  const [datai, setDatai] = useState([])
  useEffect(() => {
    const fetc = async () => {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
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
        {datai.filter(i => i.completed  === true).map(k => [<h2>{k.id}</h2>, <p>{k.title}</p>])}
        
      </div>
    </>
  )
}

export default App
