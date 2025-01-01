import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='custom-cursor'
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  );
};

export default CustomCursor;
