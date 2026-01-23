import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'

function App() {
  const [datai, setDatai] = useState([])
  useEffect(() => {
    const fetc = async () => {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1")
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
        <h2>{datai.title}</h2>
        <p>{datai.body}</p>
      </div>
    </>
  )
}

export default App
