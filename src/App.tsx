import React from "react"
import { RestaurantIndexPage } from "./pages/RestaurantIndexPage"
import { SWRConfigYelp } from "./SWRConfigYelp"

const App = () => {
  return(
    <SWRConfigYelp>
      <RestaurantIndexPage />
    </SWRConfigYelp>
  )
}

export default App
