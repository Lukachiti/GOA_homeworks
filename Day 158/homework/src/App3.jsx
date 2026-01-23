import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'
import { use } from 'react'

function App3() {
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
        <input type="text" placeholder='Search' onInput={(e) => {setInPu(e.target.value) }} />
        {datai.filter(i => i.title.startsWith(inpu)).map(i => [<h2>{i.title}</h2>])}
        
      </div>
    </>
  )
}

export default App3

