'use client';

import Navbar from '@/components/Navbar';
import StarsBackground from '@/components/StarsBackground';
import PricingCard from '@/components/PricingCard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PricingPage() {
  const [texts, setTexts] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTexts([
        'The Ultimate Followers Services.',
        'The Ultimate Members Services.'
      ]);
    }, 1000); // Fade-in delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <StarsBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-start px-4 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
          >
            The Ultimate Roblox Alt Generation Services.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
            <PricingCard
              title="Alt Gen Premium"
              price=" / one-time"
              description="1-hour cooldown; generates 10–30 day old accounts."
              icon="⭐"
              glowColor="from-yellow-400 to-yellow-600"
            />
            <PricingCard
              title="Alt Gen Extreme"
              price="0 / one-time"
              description="No cooldown."
              icon="👑"
              glowColor="from-red-500 to-red-700"
            />
            <PricingCard
              title="Followers Services"
              price="0 / one-time per 1k followers"
              description="Boost your social presence."
              icon="👥"
              glowColor="from-red-500 to-red-700"
            />
            <PricingCard
              title="Members Services"
              price=" / one-time per 1k members"
              description="Grow your community."
              icon="⭐"
              glowColor="from-gray-300 to-white"
            />
          </div>

          <div className="mt-16 space-y-4">
            {texts.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-xl text-white text-center"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
