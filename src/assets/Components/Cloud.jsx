import React, { useMemo } from 'react';


const Cloud = ({ scrollY, index }) => {
  const cloudStyle = useMemo(() => {
    const speed = 0.09;
    const size = 20 + index * 10;
    const posX = (index * 33) % 90;
    const posY = (index * 10) % 20;
    
    return {
      backgroundImage: "url('/cloud.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      left: `calc(${posX}% - ${scrollY * speed}px)`,
      top: `${posY}%`,
      width: `${size}%`,
      height: 'auto',
      aspectRatio: '2 / 1',
      zIndex: 5 + index,
      transition: 'left 0.3s ease-out',
    };
  }, [scrollY, index]);

  return <div style={cloudStyle} />;
};

export default React.memo(Cloud);
