import React from 'react'
import { motion } from 'framer-motion'

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'settings', label: 'Settings' },
    { id: 'devlogs', label: 'Devlogs' }
  ]

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="gradient-text">VYSE</h1>
            <span>Roblox Alt Gen</span>
          </motion.div>
          
          <div className="nav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div className="tab-indicator" layoutId="activeTab" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
