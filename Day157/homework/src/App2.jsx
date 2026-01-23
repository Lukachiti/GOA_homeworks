import { useState, useEffect, useEffectEvent} from 'react'
import './App.css'

function App2() {
  const [datai, setDatai] = useState([])
  const [loading, setLoading] = useState(true)
  const [eror,setEror] = useState(null)
  useEffect(() => {
    const fetc = async () => {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await resp.json()
        console.log(data)
        setDatai(data)
      }
      catch (error){
        console.error('Error fetching data:', error);
        setEror(error)
      } finally {
        setLoading(false)
      }
      
    }
    fetc()
  }, [])
  while(loading){
    return <>Loading...</>
  }
  if(eror){
    return <>there was an error fetching your data :[</>
  }
    
  return (
    <>
      <div>
        <div>{datai.map(i => [<p>{i.id}</p>, <p>name: {i.name}</p>, <p>username: {i.username}</p>, <p>email: {i.email}</p>])}</div>
      </div>
    </>
  )
}

export default App2
