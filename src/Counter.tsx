import React, { FC, useState } from "react"
import "./index.css"

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)
  const handleClick = () => setCount(count => count + 1)

  return(
    <h1 onClick={handleClick}>{count}</h1>
  )
}

export default Counter
