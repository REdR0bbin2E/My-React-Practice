import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './pages/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {


  return (

    <BrowserRouter>

      <NavBar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </BrowserRouter>

  )


}

export default App
