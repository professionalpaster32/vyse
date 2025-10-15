'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Discord } from 'lucide-react';
import StarsBackground from '@/components/StarsBackground';
import HeadlessAccordionDemo from '@/components/FAQs';
import dynamic from 'next/dynamic';

// Dynamically import BeamsScene with SSR disabled
const BeamsScene = dynamic(() => import('@/components/Beams'), { ssr: false });

export default function HomePage() {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState(0);

  const sequence = [
    "Welcome to Vyse",
    "Improve Your Experience With Vyse",
    "The Ultimate Future of Services",
    "The Ultimate Alt Gen Services",
    "The Ultimate Members Services",
    "The Ultimate Followers Services"
  ];

  useEffect(() => {
    const visited = typeof window !== 'undefined' ? localStorage.getItem('vyse_visited') : null;
    if (!visited) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('vyse_visited', '1');
      }
      typeText(sequence[0], 0);
    } else {
      setDisplayText("Improve Your Experience With Vyse");
      setPhase(2);
    }
  }, []);

  const typeText = (text, index) => {
    if (index < text.length) {
      setDisplayText(prev => prev + text.charAt(index));
      setTimeout(() => typeText(text, index + 1), 50);
    } else {
      setTimeout(() => {
        if (phase === 0) {
          setPhase(1);
          cycleTexts(1);
        }
      }, 1500);
    }
  };

  const cycleTexts = (step) => {
    if (step >= sequence.length) {
      setDisplayText("Improve Your Experience With Vyse");
      setPhase(2);
      return;
    }

    let current = sequence[step];
    if (step === 2) {
      animateServiceText();
      return;
    }

    setDisplayText('');
    setTimeout(() => typeText(current, 0), 300);
    setTimeout(() => cycleTexts(step + 1), 3000);
  };

  const animateServiceText = () => {
    const variants = ["Future", "Alt Gen", "Members", "Followers"];
    let i = 0;
    const interval = setInterval(() => {
      const base = "The Ultimate ";
      const suffix = " Services";
      setDisplayText(base + variants[i] + suffix);
      i++;
      if (i >= variants.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText("Improve Your Experience With Vyse");
          setPhase(2);
        }, 1500);
      }
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <StarsBackground />
      <BeamsScene />

      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-white font-bold text-xl">Vyse</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/pricing"
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-100 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="https://discord.gg/vyse"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white font-semibold flex items-center gap-2 backdrop-blur-sm hover:bg-white/5 transition-all"
            >
              <Discord size={18} />
              Discord Server
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm">
            <span className="text-white font-bold text-sm">VYSE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6">
            {displayText}
          </h1>
        </motion.div>
      </div>

      <section className="relative z-10 py-20 px-4 max-w-4xl mx-auto">
        <HeadlessAccordionDemo />
      </section>
    </div>
  );
}
