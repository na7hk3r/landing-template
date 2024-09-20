import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'

const Services = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    { name: t.webDevelopment, description: t.webDevelopmentDesc },
    { name: t.mobileApps, description: t.mobileAppsDesc },
    { name: t.itConsulting, description: t.itConsultingDesc },
    { name: t.cloudComputing, description: t.cloudComputingDesc },
  ]

  return (
    <div className={`container mx-auto px-4 py-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <h1 className="text-4xl font-bold mb-8">{t.ourServices}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg`}>
            <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
