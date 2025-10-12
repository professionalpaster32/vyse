import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Stats = () => {
  const [daysUntilRelease, setDaysUntilRelease] = useState(0)

  useEffect(() => {
    const releaseDate = new Date('2024-11-01')
    const today = new Date()
    const diffTime = releaseDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysUntilRelease(Math.max(0, diffDays))
  }, [])

  const stats = [
    {
      id: 1,
      title: 'Days till release',
      value: daysUntilRelease,
      suffix: 'days',
      description: 'Counting down to launch'
    },
    {
      id: 2,
      title: '24/7 Support',
      value: 'Always',
      description: 'Round the clock assistance'
    },
    {
      id: 3,
      title: 'Fast & Trusted',
      value: '100%',
      suffix: 'uptime',
      description: 'Reliable service guaranteed'
    }
  ]

  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="glow-card stats-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="stats-title">{stat.title}</h3>
              <div className="stats-value">
                {stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="stats-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
