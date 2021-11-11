import React from "react"
import { RestaurantIndex } from "./pages/RestaurantIndex"
import { SWRConfigYelp } from "./SWRCustomYelp"

const App = () => {
  return(
    <SWRConfigYelp>
      <RestaurantIndex />
    </SWRConfigYelp>
  )
}

export default App
