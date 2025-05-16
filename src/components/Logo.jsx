import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div
      style={{
        width,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#ea580c', // Tailwind orange-600
        display: 'inline-block',
        animation: 'pulseScale 2s infinite ease-in-out',
        userSelect: 'none',
      }}
    >
      VibeScroll
      <style>{`
        @keyframes pulseScale {
          0%, 100% {
            transform: scale(1);
            color: #ea580c; /* orange-600 */
          }
          50% {
            transform: scale(1.1);
            color: #f97316; /* orange-500 */
          }
        }
      `}</style>
    </div>
  );
}

export default Logo;
