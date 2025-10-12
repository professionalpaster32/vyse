import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Settings from './components/Settings'
import Devlogs from './components/Devlogs'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="spinner-ring"></div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-text"
        >
          VYSE
        </motion.h1>
      </div>
    )
  }

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <AnimatePresence mode="wait">
        {activeTab === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <Stats />
            <Features />
            <FAQ />
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Settings />
          </motion.div>
        )}

        {activeTab === 'devlogs' && (
          <motion.div
            key="devlogs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Devlogs />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
