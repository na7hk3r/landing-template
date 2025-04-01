import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'

const About = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="relative min-h-[70vh] py-20">
      <div className={`
        container mx-auto px-6 py-16 
        ${isDarkMode ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'}
        rounded-xl shadow-lg backdrop-blur-md max-w-5xl transition-all duration-500
      `}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          {t.aboutUs}
          <div className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
        </h1>
        <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto text-center animate-fade-in-up">
          {t.aboutDescription}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 transform transition-all duration-500">
          <div className={`
            ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} 
            p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300
          `}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">{t.ourMission}</h2>
            </div>
            <p className="leading-relaxed">{t.missionDescription}</p>
          </div>
          
          <div className={`
            ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} 
            p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300
          `}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">{t.ourVision}</h2>
            </div>
            <p className="leading-relaxed">{t.visionDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
