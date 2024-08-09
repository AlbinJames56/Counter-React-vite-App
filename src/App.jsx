import { useState } from 'react'

import './App.css'
import Counters from './Counters'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counters/>
    </>
   
  )
}

export default App
