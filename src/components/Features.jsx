import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Roblox Alt Generator',
      description: 'Generate fresh Roblox accounts instantly with our advanced automation system.',
      icon: '🔧'
    },
    {
      id: 2,
      title: 'Follower Buyer',
      description: 'Boost your Roblox presence with our safe and efficient follower services.',
      icon: '🚀'
    },
    {
      id: 3,
      title: 'Group Members Buyer',
      description: 'Expand your Roblox group with active members quickly and reliably.',
      icon: '👥'
    }
  ]

  return (
    <section className="features section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Powerful Features
        </motion.h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="glow-card feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="features-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://discord.gg/vyse"
            className="glow-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
