import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "Is this malware?",
      answer: "No, Vyse is a verified, Discord-linked system for demonstration/testing purposes only."
    },
    {
      question: "Is this free?",
      answer: "Vyse offers limited access; join our Discord to learn more about our pricing and plans."
    },
    {
      question: "Is this undetected?",
      answer: "Vyse services are private and Discord-managed, ensuring maximum security and discretion."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glow-card faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
