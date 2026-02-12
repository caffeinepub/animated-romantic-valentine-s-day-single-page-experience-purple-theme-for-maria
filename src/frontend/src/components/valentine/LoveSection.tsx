import { useState } from 'react';

export default function LoveSection() {
  const [clicked, setClicked] = useState(false);
  const [showRain, setShowRain] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    
    setClicked(true);
    setShowRain(true);

    setTimeout(() => {
      setShowRain(false);
    }, 3000);
  };

  // Mix of purple hearts, red hearts, and roses for rain
  const rainEmojis = ['💜', '❤️', '💖', '💘', '🌹', '🥀'];
  
  // Mix for pop heart
  const popEmojis = ['💜', '❤️', '💖'];

  return (
    <section className="love-section">
      {showRain && (
        <div className="heart-rain">
          {Array.from({ length: 60 }).map((_, i) => {
            const emoji = rainEmojis[Math.floor(Math.random() * rainEmojis.length)];
            
            return (
              <div
                key={i}
                className="rain-heart"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                {emoji}
              </div>
            );
          })}
        </div>
      )}

      {clicked && (
        <div className="pop-heart">
          {popEmojis[Math.floor(Math.random() * popEmojis.length)]}
        </div>
      )}

      <div className="love-content">
        {!clicked ? (
          <button
            onClick={handleClick}
            className="love-button"
          >
            Click here if you love me 💜
          </button>
        ) : (
          <p className="love-reveal">
            You are my favorite person in the world 😍💜
          </p>
        )}
      </div>
    </section>
  );
}
