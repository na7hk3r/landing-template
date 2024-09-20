import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Layout from './assets/Components/Layout'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Services from './assets/Components/Services'
import Contact from './assets/Components/Contact'

function App() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
