import React, { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'
import { debounce } from 'lodash'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { language, changeLanguage } = useLanguage()
  const t = translations[language]
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(
    debounce(() => {
      setIsScrolled(window.scrollY > 10)
    }, 100),
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? isDarkMode
          ? 'bg-gray-800/90 shadow-md'
          : 'bg-white/90 shadow-md'
        : 'bg-transparent'
    }`}>
      <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'h-12' : 'h-16'
      }`}>
        <Link to="/" className="flex items-center space-x-2 group">
          <img src="/logo.png" alt="Logo" className={`object-contain transition-all duration-300 group-hover:rotate-12 ${
            isScrolled ? 'w-6 h-6' : 'w-8 h-8'
          }`} />
          <span className={`font-semibold transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } ${isScrolled ? 'text-lg' : 'text-xl'}`}>
            73lab
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'home' ? '/' : `/${item}`} 
                  className={`relative py-1 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } ${location.pathname === (item === 'home' ? '/' : `/${item}`) ? 'font-medium' : ''} ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  {t[item]}
                  <span className={`absolute left-0 right-0 bottom-0 h-0.5 transform scale-x-0 transition-transform duration-300 ${
                    isDarkMode ? 'bg-white' : 'bg-gray-900'
                  } ${location.pathname === (item === 'home' ? '/' : `/${item}`) ? 'scale-x-100' : ''} group-hover:scale-x-100`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-3">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className={`p-1 rounded transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            } ${isScrolled ? 'text-sm' : 'text-base'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
              isDarkMode ? 'focus:ring-gray-500' : 'focus:ring-gray-400'
            }`}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="eo">EO</option>
          </select>
          <button 
            onClick={toggleTheme} 
            className={`rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDarkMode 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            } ${isScrolled ? 'p-1.5' : 'p-2'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
              isDarkMode ? 'focus:ring-yellow-500' : 'focus:ring-gray-400'
            }`}
            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className={`${isScrolled ? 'h-4 w-4' : 'h-5 w-5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className={`${isScrolled ? 'h-4 w-4' : 'h-5 w-5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar