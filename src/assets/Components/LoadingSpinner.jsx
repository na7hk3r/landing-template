import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const LoadingSpinner = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} opacity-75`}></div>
      <div className="relative">
        <div className={`w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin ${isDarkMode ? 'border-opacity-75' : ''}`}></div>
        <div className={`mt-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cargando...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
