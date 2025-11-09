import React, { useEffect, useState, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const [bubbles, setBubbles] = useState([]);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      // Throttle to create bubbles every 50ms for better performance
      if (now - lastTimeRef.current < 50) return;
      lastTimeRef.current = now;

      // Create a new bubble at mouse position
      const newBubble = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };


      setBubbles((prev) => {
        // Limit to 15 bubbles max for performance
        const updated = [...prev, newBubble];
        return updated.slice(-15);
      });

     
      setTimeout(() => {
        setBubbles((prev) => prev.filter((bubble) => bubble.id !== newBubble.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="cursor-bubble"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;

