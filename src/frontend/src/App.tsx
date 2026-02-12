import { useState } from 'react';
import OpeningSequence from './components/valentine/OpeningSequence';
import MainMessage from './components/valentine/MainMessage';
import SecondSection from './components/valentine/SecondSection';
import LoveSection from './components/valentine/LoveSection';
import SignatureSection from './components/valentine/SignatureSection';
import AmbientFloating from './components/valentine/AmbientFloating';
import BackgroundMusic from './components/valentine/BackgroundMusic';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="valentine-app">
      {!showContent && <OpeningSequence onComplete={() => setShowContent(true)} />}
      
      {showContent && (
        <>
          <AmbientFloating />
          <BackgroundMusic />
          
          <main className="valentine-content">
            <MainMessage />
            <SecondSection />
            <LoveSection />
            <SignatureSection />
          </main>

          <footer className="valentine-footer">
            <p className="footer-text">
              © {new Date().getFullYear()} · Built with 💜 using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                caffeine.ai
              </a>
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
