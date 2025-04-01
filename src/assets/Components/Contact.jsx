import React, { useState, useCallback } from 'react'
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

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  })

  const handleChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setFormStatus({ submitted: false, submitting: true, error: null })
    
    // Simulación de envío de formulario con un tiempo de espera
    setTimeout(() => {
      console.log('Formulario enviado:', formData)
      setFormStatus({ submitted: true, submitting: false, error: null })
      // Reset form after success
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, submitting: false, error: null })
      }, 3000)
    }, 1000)
  }, [formData])

  return (
    <div className="relative min-h-[70vh] py-20">
      <div className={`
        container mx-auto px-6 py-16 
        ${isDarkMode ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'}
        rounded-xl shadow-lg backdrop-blur-md max-w-5xl transition-all duration-500
      `}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          {t.contactUs}
          <div className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact information */}
          <div className="lg:col-span-2 px-6">
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-sm opacity-70">info@73lab.com</p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t.phone}</h3>
                  <p className="text-sm opacity-70">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t.address}</h3>
                  <p className="text-sm opacity-70">123 Tech Street, Innovation City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {formStatus.submitted ? (
              <div className={`p-6 ${isDarkMode ? 'bg-green-800/30' : 'bg-green-50'} rounded-xl border ${isDarkMode ? 'border-green-700' : 'border-green-200'} animate-fade-in-down`}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-500">{t.messageSent}</h3>
                </div>
                <p>{t.thankYou}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`p-6 ${isDarkMode ? 'bg-gray-800/60' : 'bg-white/60'} rounded-xl shadow-lg`}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium">{t.name}</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30' 
                          : 'bg-white/80 text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                      }`}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">{t.email}</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30' 
                          : 'bg-white/80 text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                      }`}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">{t.message}</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.messagePlaceholder}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30' 
                          : 'bg-white/80 text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                      }`}
                      rows="6"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    disabled={formStatus.submitting}
                    className={`
                      relative overflow-hidden font-medium py-3 px-8 rounded-xl transition-all duration-300 
                      transform hover:-translate-y-1 hover:shadow-lg
                      ${isDarkMode 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600' 
                        : 'bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600'
                      }
                      ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}
                    `}
                  >
                    {formStatus.submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.sending}
                      </span>
                    ) : (
                      <span>{t.send}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
