import { useEffect, useState } from 'react'
import Companies from './components/Companies';
import Jobs from './components/JobInfo';
import './App.css'

const url = 'https://course-api.com/react-tabs-project';

function App() {
 
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState([])
  const [active, setActive] = useState(0)

const fetchData = async () =>{
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    setInfo(data)
    setIsLoading(false)
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  fetchData()
}, [])

if(isLoading) {
  return <div>Is Loading...</div>
}


const filterJob = (index) =>{
  setActive(index)
}


  return (
    <main class="jobs-center">
     <Companies data={info} filter={filterJob} current={active}/>
     <Jobs data={info} current={active}/>
    </main>
  )
}

export default App
