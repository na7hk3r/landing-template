import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'

const About = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={`
      container mx-auto px-4 py-16 
      ${isDarkMode ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'}
      rounded-lg backdrop-blur-sm
    `}>
      <h1 className="text-4xl font-bold mb-8">{t.aboutUs}</h1>
      <p className="text-xl mb-8">
        {t.aboutDescription}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg`}>
          <h2 className="text-2xl font-bold mb-4">{t.ourMission}</h2>
          <p>{t.missionDescription}</p>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg`}>
          <h2 className="text-2xl font-bold mb-4">{t.ourVision}</h2>
          <p>{t.visionDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default About
