import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">Vyse</span> – Roblox Alt Gen
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your trusted Roblox automation network — powered by Discord.
          </motion.p>
          
          <motion.a
            href="https://discord.gg/vyse"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join Discord</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 0h-17A3.5 3.5 0 000 3.5v17A3.5 3.5 0 003.5 24h17a3.5 3.5 0 003.5-3.5v-17A3.5 3.5 0 0020.5 0zM16 12.65h-3.35V16h-1.3v-3.35H8v-1.3h3.35V8h1.3v3.35H16v1.3z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
