import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'

const Home = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={`container mx-auto ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
          <img src="/logo.png" alt="Logo" className="w-64 h-64 object-contain" />
        </div>
        <h1 className="text-center mb-6 animate-fade-in-down">
          {t.welcome}
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 animate-fade-in-up max-w-2xl">
          {t.discover}
        </p>
        <Link to="/services" className={`${
          isDarkMode 
            ? 'bg-white text-gray-900 hover:bg-gray-200' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        } font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-lg`}>
          {t.start}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
        {[t.innovation, t.efficiency, t.support].map((feature, index) => (
          <div key={index} className={`${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl`}>
            <h3 className="text-2xl font-bold mb-4">{feature}</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {t.solutionsDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home