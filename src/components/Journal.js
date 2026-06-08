import React from 'react';
import { motion } from 'framer-motion';
import './Journal.css';

function Journal({ onOpenArticle }) {
  const articles = [
    {
      id: 1,
      title: 'ERD: THE NEW WAVE',
      date: '03.06.2026',
      image: '/img/ERD-logo.jpg',
      excerpt: 'Как уличный бренд покоряет мировые подиумы',
      category: 'БРЕНДЫ',
    },
    {
      id: 2,
      title: 'NIKE x TRAVIS SCOTT',
      date: '28.05.2026',
      image: '/img/Travis-Nike.jpg',
      excerpt: 'История самой громкой коллаборации года',
      category: 'КОЛЛАБОРАЦИИ',
    },
    {
      id: 3,
      title: 'DROPS 2026',
      date: '15.05.2026',
      image: '/img/Drops.png',
      excerpt: 'Что ждать от новых релизов',
      category: 'НОВОСТИ',
    },
  ];

  return (
    <div className='journal-page'>
      <div className='journal-container'>
        <div className='journal-header'>
          <h1>JOURNAL</h1>
          <p>НОВОСТИ, ИНТЕРВЬЮ, КОЛЛАБОРАЦИИ</p>
        </div>

        <div className='journal-grid'>
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className='journal-card'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => onOpenArticle(article)}>
              <div className='journal-image'>
                <img src={article.image} alt={article.title} />
                <div className='journal-category'>{article.category}</div>
              </div>
              <div className='journal-content'>
                <span className='journal-date'>{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <button className='journal-read'>READ MORE →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journal;
