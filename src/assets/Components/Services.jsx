import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'

const Services = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    { 
      name: t.webDevelopment, 
      description: t.webDevelopmentDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-blue-400 to-indigo-500'
    },
    { 
      name: t.mobileApps, 
      description: t.mobileAppsDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-green-400 to-cyan-500'
    },
    { 
      name: t.itConsulting, 
      description: t.itConsultingDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      gradient: 'from-yellow-400 to-orange-500'
    },
    { 
      name: t.cloudComputing, 
      description: t.cloudComputingDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: 'from-purple-400 to-pink-500'
    },
  ]

  return (
    <div className="relative min-h-[70vh] py-20">
      <div className={`container mx-auto px-6 py-16 ${isDarkMode ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'} rounded-xl shadow-lg backdrop-blur-md max-w-6xl`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          {t.ourServices}
          <div className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`
                ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} 
                p-8 rounded-xl shadow-lg transition-all duration-300 
                hover:shadow-xl transform hover:-translate-y-2 group
              `}
            >
              <div className="flex flex-col items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl p-3 bg-gradient-to-br ${service.gradient} transform rotate-3 group-hover:rotate-6 transition-all duration-300 mb-4 flex items-center justify-center`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 group-hover:text-transparent bg-clip-text bg-gradient-to-r group-hover:${service.gradient} transition-all duration-300">
                  {service.name}
                </h2>
              </div>
              <p className="text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
