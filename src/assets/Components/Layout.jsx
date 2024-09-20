import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Navbar from './Navbar'
import Footer from './Footer'  // Asegúrate de que esta línea esté presente

const Layout = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
