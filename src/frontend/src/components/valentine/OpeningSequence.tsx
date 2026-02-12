import { useEffect, useState } from 'react';

interface OpeningSequenceProps {
  onComplete: () => void;
}

export default function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const [phase, setPhase] = useState<'dark' | 'particles' | 'heart' | 'beating' | 'opening'>('dark');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip to end quickly for reduced motion
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Normal animation sequence
    const darkTimer = setTimeout(() => setPhase('particles'), 500);
    const particlesTimer = setTimeout(() => setPhase('heart'), 1500);
    const heartTimer = setTimeout(() => setPhase('beating'), 2500);
    const beatingTimer = setTimeout(() => setPhase('opening'), 4500);
    const openingTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(darkTimer);
      clearTimeout(particlesTimer);
      clearTimeout(heartTimer);
      clearTimeout(beatingTimer);
      clearTimeout(openingTimer);
    };
  }, [onComplete]);

  return (
    <div className="opening-sequence">
      <div className="opening-particles">
        {phase !== 'dark' && Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {(phase === 'heart' || phase === 'beating' || phase === 'opening') && (
        <div className={`opening-heart ${phase === 'beating' ? 'beating' : ''} ${phase === 'opening' ? 'opening' : ''}`}>
          💜
        </div>
      )}
    </div>
  );
}
