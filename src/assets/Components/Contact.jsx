import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../util/translations'

const Contact = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí iría la lógica para enviar el formulario
  }

  return (
    <div className={`container mx-auto px-4 py-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <h1 className="text-4xl font-bold mb-8">{t.contactUs}</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">{t.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
              isDarkMode 
                ? 'bg-gray-700 text-white border-gray-600 focus:border-gray-500' 
                : 'bg-white text-gray-900 border-gray-300 focus:border-gray-400'
            }`}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">{t.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
              isDarkMode 
                ? 'bg-gray-700 text-white border-gray-600 focus:border-gray-500' 
                : 'bg-white text-gray-900 border-gray-300 focus:border-gray-400'
            }`}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">{t.message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
              isDarkMode 
                ? 'bg-gray-700 text-white border-gray-600 focus:border-gray-500' 
                : 'bg-white text-gray-900 border-gray-300 focus:border-gray-400'
            }`}
            rows="4"
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className={`font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${
            isDarkMode 
              ? 'bg-white text-gray-900 hover:bg-gray-200' 
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {t.send}
        </button>
      </form>
    </div>
  )
}

export default Contact
