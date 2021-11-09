import React, { useState } from "react"
import "./index.css"

const App = () => {
  var [count, setCount] = useState(0)

  return(
    <div className="App">
      <h1>Hello, World!</h1>
      <h1 onClick={() => setCount(count => count + 1)}>{count}</h1>
    </div>
  )
}

export default App
