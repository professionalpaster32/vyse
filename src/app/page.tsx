'use client';

import Navbar from '@/components/Navbar';
import BeamsBackground from '@/components/BeamsBackground';
import FAQ from '@/components/FAQ';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentText, setCurrentText] = useState('Welcome to Vyse');
  const [isWelcomeDone, setIsWelcomeDone] = useState(false);
  const [sequenceIndex, setSequenceIndex] = useState(0);

  const sequence = [
    'The Ultimate Future of Services',
    'The Ultimate Alt Gen Services',
    'The Ultimate Members Services',
    'The Ultimate Followers Services'
  ];

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setCurrentText('Improve Your Experience With Vyse');
      setIsWelcomeDone(true);
    }, 3000); // Show "Welcome to Vyse" for 3 seconds

    if (isWelcomeDone) {
      const sequenceTimer = setInterval(() => {
        setCurrentText(sequence[sequenceIndex]);
        setSequenceIndex((prevIndex) => (prevIndex + 1) % sequence.length);
      }, 3000); // Cycle through sequence every 3 seconds

      return () => {
        clearInterval(sequenceTimer);
        clearTimeout(welcomeTimer);
      };
    }

    return () => clearTimeout(welcomeTimer);
  }, [isWelcomeDone, sequenceIndex, sequence]);

  return (
    <div className="relative min-h-screen w-full">
      <BeamsBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {currentText.includes('Vyse') || currentText.includes('Future') || currentText.includes('Alt Gen') || currentText.includes('Members') || currentText.includes('Followers') ? (
                <span className="glow-text">{currentText}</span>
              ) : (
                currentText
              )}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => window.location.href = '/pricing'}
                className="px-6 py-3 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => window.open('https://discord.gg', '_blank')}
                className="px-6 py-3 border border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Discord
              </button>
            </div>
          </div>
        </main>
        <FAQ />
      </div>
    </div>
  );
}
