import React, { useEffect, useRef } from 'react';

export default function GlowBackground() {
  const glowRef = useRef(null);
  
  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    
    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    let animationFrameId;
    const updatePosition = () => {
      // Smooth ease-out interpolation (spring lag effect)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    updatePosition();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
        background: '#060309', // Deep luxurious amethyst-tinted background
      }}
    >
      {/* Pointer Tracker Glow */}
      <div 
        ref={glowRef}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.15) 0%, rgba(var(--accent-2-rgb), 0.07) 40%, transparent 70%)',
          filter: 'blur(40px)',
          willChange: 'transform',
          transform: 'translate3d(-999px, -999px, 0)',
        }}
      />
      
      {/* Ambient backlighting blurs */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-15%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-15%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(var(--accent-2-rgb), 0.04) 0%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Premium Glossy Micro-Grid Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Subtle diagonal glossy lines */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.015,
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Glossy glass noise texture overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
