import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'How to choose the right size?',
      a: "Please refer to our size guide below. If you're between sizes, we recommend sizing up for a relaxed fit or down for a fitted look.",
    },
    {
      q: 'How to care for my clothes?',
      a: 'Machine wash cold with like colors, tumble dry low, do not bleach, iron on low heat if needed.',
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes, we ship worldwide. Shipping costs and delivery times vary by location.',
    },
    {
      q: 'Can I cancel or change my order?',
      a: 'We process orders quickly. Please contact us within 1 hour of placing your order to make changes.',
    },
    {
      q: 'Are your products sustainable?',
      a: 'We use organic cotton and recycled materials whenever possible. Our packaging is 100% recyclable.',
    },
    {
      q: 'How do I track my order?',
      a: 'You will receive a tracking number via email once your order ships.',
    },
  ];

  return (
    <motion.div
      className='faq-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <div className='faq-container'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>

        <div className='faq-list'>
          {faqs.map((faq, index) => (
            <div key={index} className='faq-item'>
              <button
                className='faq-question'
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }>
                <span>{faq.q}</span>
                <span className='faq-icon'>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className='faq-answer'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className='faq-contact'>
          <p>
            Still have questions? Contact us at{' '}
            <strong>hello@voguestudio.com</strong>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default FAQ;
