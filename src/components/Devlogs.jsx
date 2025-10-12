import React from 'react'
import { motion } from 'framer-motion'

const Devlogs = () => {
  const devlogs = [
    {
      id: 1,
      title: 'UPDATE LOG #1',
      date: 'October 2024',
      content: 'Initial launch of Vyse - Roblox Alt Gen. Featuring core automation services, Discord integration, and a sleek new dashboard interface. More updates coming soon!'
    }
  ]

  return (
    <section className="devlogs section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Development Logs
        </motion.h2>
        
        <motion.div
          className="devlogs-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {devlogs.map((log, index) => (
            <motion.div
              key={log.id}
              className="glow-card devlog-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{log.title}</h3>
              <div className="devlog-date">{log.date}</div>
              <div className="devlog-content">
                {log.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Devlogs
