import { useEffect, useState } from 'react';

export default function AmbientFloating() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (reducedMotion) {
    return null;
  }

  // Mix of purple hearts, red hearts, roses, and kiss emojis
  const heartEmojis = ['💜', '❤️', '💖', '💘', '🌹', '🥀'];
  const eyesEmojis = ['😍', '🥰'];
  const kissEmojis = ['😗', '😘'];

  return (
    <div className="ambient-floating">
      {/* Floating hearts and roses */}
      {Array.from({ length: 20 }).map((_, i) => {
        const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        const isRose = emoji === '🌹' || emoji === '🥀';
        
        return (
          <div
            key={`heart-${i}`}
            className={isRose ? 'ambient-rose' : 'ambient-heart'}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {emoji}
          </div>
        );
      })}

      {/* Heart eyes emojis */}
      {Array.from({ length: 5 }).map((_, i) => {
        const emoji = eyesEmojis[Math.floor(Math.random() * eyesEmojis.length)];
        
        return (
          <div
            key={`eyes-${i}`}
            className="ambient-eyes"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            {emoji}
          </div>
        );
      })}

      {/* Kiss emojis */}
      {Array.from({ length: 6 }).map((_, i) => {
        const emoji = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];
        
        return (
          <div
            key={`kiss-${i}`}
            className="ambient-kiss"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${18 + Math.random() * 10}s`,
            }}
          >
            {emoji}
          </div>
        );
      })}

      {/* Twinkling sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="ambient-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
}
