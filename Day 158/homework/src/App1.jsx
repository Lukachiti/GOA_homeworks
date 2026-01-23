import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'
import { use } from 'react'

function App1() {
  const [datai, setDatai] = useState([])
  
  const [show, setShow] = useState(true)
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
        {show ? datai.filter(i => i.id < 6).map(i => [<h2>{i.title}</h2>, <p>{i.body}</p>]) : ""}
        <button onClick={() => {show ? setShow(false) : setShow(true)}}>show/hide</button>
      </div>
    </>
  )
}

export default App1

