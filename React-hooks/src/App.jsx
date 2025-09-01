import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const addValue = () => {
    setCount(count + 1)
  }   
  return (
    <>
      <div>
       <p>  The Value Is: {count}</p>
       <button onClick={addValue}>ADD YOUR VALUE</button>
     </div>
    </>
  )
}

export default App
