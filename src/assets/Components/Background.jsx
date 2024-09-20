import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Background = React.memo(({ scrollY }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed inset-0 w-full h-full">
      <div className={`absolute inset-0 w-full h-full transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-blue-200'
      }`}></div>
      
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isDarkMode ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          backgroundImage: "url('/dark-sky.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isDarkMode ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: "url('/light-sky.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-30"></div>
      </div>
      <div 
        className="absolute inset-x-0 bottom-0 w-full transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/mountain-bg.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          opacity: 0.7,
          transform: `translateY(${scrollY * 0.1}px)`,
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    </div>
  );
});

export default Background;
