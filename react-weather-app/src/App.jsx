import { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router"
import CityList from './components/CityList'
import './App.css'
import CityForecast from './components/CityForecast'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path="/forecast/:cityName" element={<CityForecast />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
