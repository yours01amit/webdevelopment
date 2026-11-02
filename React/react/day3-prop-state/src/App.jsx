import React, { useState } from 'react'
import Contact from './Contact'

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>count is - {count}</h1>

      <button  onClick={()=> {
        setCount(count+1)
        
      }}>Increment</button>
    </div>
  )
}

export default App