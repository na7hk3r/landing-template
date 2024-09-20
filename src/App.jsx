import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Layout from './assets/Components/Layout'
import Navbar from './assets/Components/Navbar'
import LoadingSpinner from './assets/Components/LoadingSpinner'

const Home = lazy(() => import('./assets/Components/Home'))
const About = lazy(() => import('./assets/Components/About'))
const Services = lazy(() => import('./assets/Components/Services'))
const Contact = lazy(() => import('./assets/Components/Contact'))

function App() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
