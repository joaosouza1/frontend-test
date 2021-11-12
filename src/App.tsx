import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { RestaurantDetailPage } from "./pages/RestaurantDetailPage"
import { RestaurantIndexPage } from "./pages/RestaurantIndexPage"
import { SWRConfigYelp } from "./SWRConfigYelp"

const App = () => {
  return (
    <SWRConfigYelp>
      <Router>
        <Routes>
          <Route path="/" element={<RestaurantIndexPage />} />
          <Route path="/:id" element={<RestaurantDetailPage />} />
        </Routes>
      </Router>
    </SWRConfigYelp>
  )
}

export default App
