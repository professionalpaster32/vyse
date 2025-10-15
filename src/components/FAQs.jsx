'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ITEMS = [
  {
    title: 'Is This Legitimate?',
    content: 'Yes, our product is 100% legitimate. We take pride in providing real, working features with consistent updates and strong community support to ensure everything runs smoothly and securely.'
  },
  {
    title: 'Is This Safe?',
    content: 'Absolutely. We prioritize safety and ensure that all our systems are designed with protection and privacy in mind. Our tools are tested thoroughly to avoid any malicious behavior or risks to users.'
  },
  {
    title: 'How To Get Started',
    content: 'Join our official Discord server for more information, guidance, and community support. You’ll find tutorials, setup help, and active members ready to assist you.'
  }
];

export default function HeadlessAccordionDemo() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {ITEMS.map((item, index) => (
        <motion.div
          key={index}
          className="mb-4 border border-white/10 rounded-xl overflow-hidden bg-black/20 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            className="w-full p-6 text-left flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-white font-semibold text-lg">{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="text-gray-400" size={20} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 text-gray-300"
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
