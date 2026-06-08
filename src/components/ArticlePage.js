import React from 'react';
import { motion } from 'framer-motion';
import './ArticlePage.css';

function ArticlePage({ article, onBack }) {
  const getArticleContent = (id) => {
    switch (id) {
      case 1:
        return {
          title: 'ERD: THE NEW WAVE',
          date: '03.06.2026',
          author: 'EDITORIAL TEAM',
          content: `
            <p>ERD — это не просто бренд, это движение. Рожденный на улицах Москвы, сегодня он завоевывает мировые подиумы и сердца модников по всему миру.</p>

            <h2>НАЧАЛО ПУТИ</h2>
            <p>История ERD началась в 2020 году с небольших тиражей и эксклюзивных дропов. Основатель бренда, скрывающийся за инициалами, создавал вещи для своих друзей, но быстро понял, что спрос превышает предложение.</p>

            <div class="article-quote">
              <p>"Мы не делаем одежду. Мы создаем сообщество. Каждая вещь — это часть истории"</p>
              <span>— Основатель ERD</span>
            </div>

            <h2>МИРОВОЕ ПРИЗНАНИЕ</h2>
            <p>В 2024 году ERD впервые показал свою коллекцию на Paris Fashion Week. Критики назвали показ "глотком свежего воздуха" и "новым словом в уличной моде".</p>

            <p>Сегодня ERD представлен в лучших бутиках мира: от Москвы до Милана, от Дубая до Нью-Йорка. Каждый дроп разлетается за считанные минуты, а вещи перепродаются на вторичном рынке в 3-4 раза дороже.</p>

            <h2>ЧТО ДАЛЬШЕ?</h2>
            <p>В планах бренда — расширение линейки, новые коллаборации и, возможно, первый полноценный показ в Москве. Следите за новостями!</p>
          `,
        };
      case 2:
        return {
          title: 'NIKE x TRAVIS SCOTT',
          date: '28.05.2026',
          author: 'SNEAKER TEAM',
          content: `
            <p>Коллаборация Nike и Travis Scott стала одной из самых влиятельных в истории sneaker-культуры. Каждый релиз — это событие, которое собирает очереди и ажиотаж.</p>

            <h2>КАК ВСЕ НАЧИНАЛОСЬ</h2>
            <p>Первая совместная работа Travis Scott и Nike вышла в 2019 году. Это были Air Jordan 1 с перевернутым свищом. Модель мгновенно стала иконой и разлетелась по всему миру.</p>

            <div class="article-quote">
              <p>"Я хочу, чтобы мои кроссовки рассказывали историю. Это не просто обувь, это часть моего творчества"</p>
              <span>— Travis Scott</span>
            </div>

            <h2>ЭВОЛЮЦИЯ КОЛЛАБОРАЦИИ</h2>
            <p>За годы сотрудничества вышло более 10 моделей: от Air Jordan до Air Max. Каждый релиз сопровождается уникальным мерчем, клипами и перформансами.</p>

            <p>Последняя модель — Nike x Travis Scott Air Max 1 "Cactus Jack" — была распродана за 2 минуты. На вторичном рынке цена стартует от 1000 долларов.</p>

            <h2>ЧЕМУ МЫ НАУЧИЛИСЬ</h2>
            <p>Эта коллаборация показала, что музыка и мода могут существовать в симбиозе. Travis Scott не просто амбассадор, он полноценный дизайнер, который влияет на каждую деталь.</p>
          `,
        };
      case 3:
        return {
          title: 'DROPS 2026',
          date: '15.05.2026',
          author: 'TRENDS TEAM',
          content: `
            <p>2026 год обещает быть богатым на громкие релизы. Мы собрали главные дропы, которые нельзя пропустить.</p>

            <h2>ERD X ???</h2>
            <p>Осенью 2026 ERD анонсирует коллаборацию с культовым японским брендом. Инсайдеры говорят о лимитированной серии из 500 экземпляров. Цена вопроса — от 500 долларов за футболку.</p>

            <div class="article-quote">
              <p>"Это будет не просто коллаборация. Это будет культурный обмен"</p>
              <span>— Представитель ERD</span>
            </div>

            <h2>NIKE AIR MAX DAY 2026</h2>
            <p>Традиционный мартовский дроп обещает быть масштабным. В этом году Nike перевыпустит легендарные Air Max 97 "Silver Bullet" и представит новую модель от Virgil Abloh, разработанную до его ухода.</p>

            <h2>ADIDAS x GUCCI VOL. 2</h2>
            <p>После успеха первой коллаборации, Adidas и Gucci готовят второй дроп. В этот раз — больше одежды, больше аксессуаров и, возможно, первая обувь для детей.</p>

            <h2>КАК НЕ ПРОПУСТИТЬ</h2>
            <p>Подпишитесь на наш Telegram-канал и включите уведомления — мы предупреждаем о каждом дропе за 24 часа.</p>
          `,
        };
      default:
        return null;
    }
  };

  const content = getArticleContent(article.id);
  if (!content) return null;

  return (
    <motion.div
      className='article-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <div className='article-container'>
        <button className='article-back' onClick={onBack}>
          ← BACK TO JOURNAL
        </button>

        <div className='article-hero'>
          <img src={article.image} alt={article.title} />
          <div className='article-hero-overlay'></div>
          <div className='article-hero-content'>
            <span className='article-date'>{content.date}</span>
            <h1>{content.title}</h1>
            <span className='article-author'>{content.author}</span>
          </div>
        </div>

        <div
          className='article-content'
          dangerouslySetInnerHTML={{ __html: content.content }}
        />

        <div className='article-footer'>
          <button className='article-share'>ПОДЕЛИТЬСЯ →</button>
          <button className='article-back-btn' onClick={onBack}>
            ВЕРНУТЬСЯ К СТАТЬЯМ
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ArticlePage;
