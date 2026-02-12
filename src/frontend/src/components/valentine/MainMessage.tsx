import { useState } from 'react';

export default function MainMessage() {
  const [showBurst, setShowBurst] = useState(false);

  const handleInteraction = () => {
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 1000);
  };

  // Mix of purple hearts, red hearts, roses, and kiss emojis for background
  const bgEmojis = ['💜', '❤️', '💖', '🌹', '💘', '😗', '😘'];

  // Mix of purple hearts, red hearts, roses, sparkles, and kiss emojis for burst
  const burstEmojis = ['💜', '❤️', '💖', '🌹', '✨', '💘', '😗', '😘'];

  return (
    <section className="main-message-section">
      <div className="floating-hearts-bg">
        {Array.from({ length: 14 }).map((_, i) => {
          const emoji = bgEmojis[i % bgEmojis.length];
          
          return (
            <div
              key={i}
              className="floating-heart-bg"
              style={{
                left: `${5 + i * 7}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            >
              {emoji}
            </div>
          );
        })}
      </div>

      <div
        className="main-message-content"
        onMouseEnter={handleInteraction}
        onClick={handleInteraction}
      >
        <h1 className="main-heading animate-line-1">
          Happy Valentines Day Maria 💜😍
        </h1>
        <p className="main-subheading animate-line-2">
          I love you so much 💜
        </p>
        <p className="main-note animate-line-3">
          (and i will always will)
        </p>

        {showBurst && (
          <div className="burst-container">
            {Array.from({ length: 16 }).map((_, i) => {
              const emoji = burstEmojis[i % burstEmojis.length];
              
              return (
                <div
                  key={i}
                  className="burst-particle"
                  style={{
                    '--angle': `${(i * 360) / 16}deg`,
                  } as React.CSSProperties}
                >
                  {emoji}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
