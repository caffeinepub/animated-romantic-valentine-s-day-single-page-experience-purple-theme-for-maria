import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      if (audioRef.current && !isMuted) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, user needs to click toggle
        });
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isMuted]);

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      setIsMuted(false);
      if (hasInteracted) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      }
    } else {
      setIsMuted(true);
      audioRef.current.pause();
    }
  };

  return (
    <div className="background-music">
      <audio
        ref={audioRef}
        loop
        src="MUSIC_URL_HERE"
      />
      
      <button
        onClick={toggleMute}
        className="music-toggle"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
