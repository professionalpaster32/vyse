import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Settings = () => {
  const [settings, setSettings] = useState({
    username: 'VyseUser',
    profileInfo: 'Roblox automation enthusiast',
    notifications: true,
    theme: 'dark'
  })

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <section className="settings section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Settings
        </motion.h2>
        
        <motion.div
          className="settings-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glow-card settings-card">
            <h3>Profile Settings</h3>
            
            <div className="setting-group">
              <label>Username</label>
              <input
                type="text"
                value={settings.username}
                onChange={(e) => updateSetting('username', e.target.value)}
                className="setting-input"
              />
            </div>
            
            <div className="setting-group">
              <label>Profile Information</label>
              <textarea
                value={settings.profileInfo}
                onChange={(e) => updateSetting('profileInfo', e.target.value)}
                className="setting-textarea"
                rows="4"
              />
            </div>
            
            <div className="setting-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => updateSetting('notifications', e.target.checked)}
                />
                Enable Notifications
              </label>
            </div>
            
            <div className="setting-group">
              <label>Theme</label>
              <select
                value={settings.theme}
                onChange={(e) => updateSetting('theme', e.target.value)}
                className="setting-input"
              >
                <option value="dark">Dark</option>
                <option value="darker">Darker</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Settings
