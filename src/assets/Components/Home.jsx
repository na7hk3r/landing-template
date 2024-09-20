import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'
import Background from './Background'
import Cloud from './Cloud'

const Home = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language]
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background scrollY={scrollY} />
      {[...Array(6)].map((_, index) => (
        <Cloud key={index} scrollY={scrollY} index={index} />
      ))}
      <div className="relative z-10 container mx-auto flex flex-col justify-center min-h-screen py-12">
        <div className="flex flex-col items-center space-y-8 px-4">
          <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
            <img src="/logo.png" alt="Logo" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain" />
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 animate-fade-in-down text-shadow-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.welcome}
          </h1>
          <p className={`text-xl md:text-2xl text-center mb-12 animate-fade-in-up max-w-2xl text-shadow-md ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {t.discover}
          </p>
          <Link 
            to="/services" 
            className={`
              font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out 
              transform hover:scale-105 hover:shadow-lg text-lg
              ${isDarkMode 
                ? 'bg-white text-gray-900 hover:bg-gray-200' 
                : 'bg-gray-900 text-white hover:bg-gray-800'}
            `}
          >
            {t.start}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)