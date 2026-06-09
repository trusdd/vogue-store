import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.div
      className='about-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <div className='about-container'>
        <h1>ABOUT VOGUE STUDIO</h1>
        <p className='about-subtitle'>EST. 2024 — MOSCOW</p>

        <div className='about-content'>
          <p>
            VOGUE STUDIO — это не просто магазин одежды. Это пространство, где
            минимализм встречает совершенство, а качество говорит само за себя.
          </p>

          <h2>OUR MISSION</h2>
          <p>
            Мы создаём одежду для тех, кто ценит простоту, комфорт и
            вневременной стиль. Каждая вещь в нашей коллекции — это результат
            кропотливой работы дизайнеров и внимания к деталям.
          </p>

          <h2>WHAT WE BELIEVE IN</h2>
          <ul>
            <li>Качество превыше количества</li>
            <li>Экологичная ответственность</li>
            <li>Доступная роскошь</li>
          </ul>

          <h2>OUR COMMUNITY</h2>
          <p>
            VOGUE STUDIO — это сообщество людей, которые выбирают осознанное
            потребление и ценят настоящий стиль. Присоединяйтесь к нам в
            социальных сетях, чтобы быть в курсе новостей.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
