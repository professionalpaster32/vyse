'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';

const FAQItems = [
  {
    question: 'Is This Legitimate?',
    answer: 'Yes, our product is 100% legitimate. We take pride in providing real, working features with consistent updates and strong community support to ensure everything runs smoothly and securely.'
  },
  {
    question: 'Is This Safe?',
    answer: 'Absolutely. We prioritize safety and ensure that all our systems are designed with protection and privacy in mind. Our tools are tested thoroughly to avoid any malicious behavior or risks to users.'
  },
  {
    question: 'How To Get Started',
    answer: 'Join our official Discord server for more information, guidance, and community support. You\'ll find tutorials, setup help, and active members ready to assist you.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQItems.map((item, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden">
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center text-white font-medium"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            <Transition
              show={openIndex === index}
              enter="transition-all duration-300 ease-out"
              enterFrom="max-h-0 opacity-0"
              enterTo="max-h-[1000px] opacity-100"
              leave="transition-all duration-200 ease-out"
              leaveFrom="max-h-[1000px] opacity-100"
              leaveTo="max-h-0 opacity-0"
            >
              <div className="px-4 pb-4 pt-2 text-gray-300">
                {item.answer}
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
}
