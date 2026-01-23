import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'

function App2() {
  const [datai, setDatai] = useState([])
  const [option, setOption] = useState([])
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
        
        <select>
            {datai.map(i => <option onSelect={() => {setOption(i.body)}} >{i.id}</option>)}
        </select>    
        <p>{option}</p>    
      </div>
    </>
  )
}

export default App2
