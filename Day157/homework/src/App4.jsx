import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'

function App4() {
  const [datai, setDatai] = useState([])
  const [ar, setAr] = useState(true)
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
  if(ar){
    return <>
      <div>
        <h2>{datai.title}</h2>
        <button onClick={() => {setAr(false)}} >click</button>
      </div>
    </>
  }
  return (
    <>
      <div>
        <h2>{datai.title}</h2>
        <p>{datai.body}</p>
      </div>
    </>
  )
}

export default App4
