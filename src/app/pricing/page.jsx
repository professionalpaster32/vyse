'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Crown, Star } from 'lucide-react';
import ElectricBorder from '@/components/ElectricBorder';
import StarsBackground from '@/components/StarsBackground';

const PricingPage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <StarsBackground />
      
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
              href="/"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/5 transition-all"
            >
              Back
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          The Ultimate Roblox Alt Generation Services.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Alt Gen Premium */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Alt Gen Premium</h3>
            <p className="text-gray-300 mb-4">Alt Gen Premium gives you a 1-hour cooldown and allows generating older accounts (10–30 days old).</p>
            <div className="text-3xl font-bold text-white">$5 / one-time</div>
          </motion.div>

          {/* Alt Gen Extreme */}
          <ElectricBorder color="#dc2626" speed={1.2} thickness={2}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 text-center relative z-10"
            >
              <Crown className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Alt Gen Extreme</h3>
              <p className="text-gray-300 mb-4">No cooldown.</p>
              <div className="text-3xl font-bold text-white">$10 / one-time</div>
            </motion.div>
          </ElectricBorder>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          The Ultimate Followers Services.
        </motion.h2>

        <div className="grid grid-cols-1 max-w-md mx-auto mb-20">
          <ElectricBorder color="#dc2626" speed={1.2} thickness={2}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 text-center relative z-10"
            >
              <Crown className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Followers Boost</h3>
              <p className="text-gray-300 mb-4">Per 1k followers</p>
              <div className="text-3xl font-bold text-white">$10 / one-time</div>
            </motion.div>
          </ElectricBorder>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          The Ultimate Members Services.
        </motion.h2>

        <div className="grid grid-cols-1 max-w-md mx-auto">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Group Members</h3>
            <p className="text-gray-300 mb-4">Per 1k group members</p>
            <div className="text-3xl font-bold text-white">$5 / one-time</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
