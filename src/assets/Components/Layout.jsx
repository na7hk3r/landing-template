import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Footer from './Footer'
import Background from './Background'

const Layout = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Background />
      <main className="flex-grow relative z-10 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default React.memo(Layout)
