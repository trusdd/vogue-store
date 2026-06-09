import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import ProductPage from './components/ProductPage';
import Journal from './components/Journal';
import Stores from './components/Stores';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import ArticlePage from './components/ArticlePage';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');
    const savedLogin = localStorage.getItem('isLoggedIn');

    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedLogin) setIsLoggedIn(JSON.parse(savedLogin));

    const productsData = [
      {
        id: 1,
        name: 'ERD ARCHIVE TEE',
        price: 18900,
        image: '/vogue-store/img/ERD-archive-tee.webp',
        stock: 5,
        category: 'tshirt',
        brand: 'ERD',
        description: 'Хлопок 100%, лимитированная серия',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 2,
        name: 'ERD DISTORTION',
        price: 15900,
        image: '/vogue-store/img/ERD-DISTORTION-Tee.jpg',
        stock: 12,
        category: 'tshirt',
        brand: 'ERD',
        description: 'Принт с эффектом дисторшн',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 3,
        name: 'ERD BLACK OPS',
        price: 21900,
        image: '/vogue-store/img/ERD-Blackops-Tee.jpeg',
        stock: 3,
        category: 'tshirt',
        brand: 'ERD',
        description: 'Лимитированная коллекция',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 4,
        name: 'ERD GHETTO',
        price: 19900,
        image: '/vogue-store/img/ERD-Ghetto-Tee.jpg',
        stock: 8,
        category: 'tshirt',
        brand: 'ERD',
        description: 'Эксклюзивный принт',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 5,
        name: 'TRAVIS SCOTT x NIKE',
        price: 45900,
        image: '/vogue-store/img/Nike-Travis.jpg',
        stock: 6,
        category: 'sneakers',
        brand: 'Nike',
        description: 'Коллаборация Travis Scott',
        sizes: [
          'RU 40 | EU 40',
          'RU 41 | EU 41',
          'RU 42 | EU 42',
          'RU 43 | EU 43',
          'RU 44 | EU 44',
          'RU 45 | EU 45',
        ],
      },
      {
        id: 6,
        name: 'NIKE x FRAGMENT',
        price: 38900,
        image: '/vogue-store/img/Nike-Fragment.jpg',
        stock: 4,
        category: 'sneakers',
        brand: 'Nike',
        description: 'Fragment Design collaboration',
        sizes: [
          'RU 41 | EU 41',
          'RU 42 | EU 42',
          'RU 43 | EU 43',
          'RU 45 | EU 45',
        ],
      },
      {
        id: 7,
        name: 'NIKE x OFF-WHITE',
        price: 52900,
        image: '/vogue-store/img/Nike-OffWhite.jpg',
        stock: 9,
        category: 'sneakers',
        brand: 'Nike',
        description: 'Virgil Abloh legacy',
        sizes: [
          'RU 40 | EU 40',
          'RU 41 | EU 41',
          'RU 42 | EU 42',
          'RU 43 | EU 43',
          'RU 44 | EU 44',
          'RU 45 | EU 45',
        ],
      },
      {
        id: 8,
        name: 'NIKE x SUPREME',
        price: 34900,
        image: '/vogue-store/img/Nike-Supreme.jpeg',
        stock: 7,
        category: 'sneakers',
        brand: 'Nike',
        description: 'Supreme box logo edition',
        sizes: [
          'RU 41 | EU 41',
          'RU 42 | EU 42',
          'RU 43 | EU 43',
          'RU 44 | EU 44',
          'RU 45 | EU 45',
        ],
      },
      {
        id: 9,
        name: 'ERD SACRIFICE',
        price: 23900,
        image: '/vogue-store/img/ERD-SACRIFICE.webp',
        stock: 2,
        category: 'tshirt',
        brand: 'ERD',
        description: 'Реликвия коллекции',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 10,
        name: 'ERD REVENGE',
        price: 20900,
        image: '/vogue-store/img/ERD-REVENGE .webp',
        stock: 11,
        category: 'tshirt',
        brand: 'ERD',
        description: 'Месть за гетто',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 11,
        name: 'NIKE x NOCTA',
        price: 41900,
        image: '/vogue-store/img/Nike-Nocta.jpg',
        stock: 5,
        category: 'sneakers',
        brand: 'Nike',
        description: 'Drake collaboration',
        sizes: [
          'RU 40 | EU 40',
          'RU 41 | EU 41',
          'RU 42 | EU 42',
          'RU 43 | EU 43',
          'RU 45 | EU 45',
        ],
      },
      {
        id: 12,
        name: 'NIKE x J BALVIN',
        price: 27900,
        image: '/vogue-store/img/Nike-JBALVIN.webp',
        stock: 8,
        category: 'sneakers',
        brand: 'Nike',
        description: 'Colores exclusivos',
        sizes: [
          'RU 41 | EU 41',
          'RU 42 | EU 42',
          'RU 43 | EU 43',
          'RU 44 | EU 44',
          'RU 45 | EU 45',
        ],
      },
    ];
    setProducts(productsData);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [cartItems, favorites, isLoggedIn]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (item && item.quantity + delta <= 0) {
        return prev.filter((i) => i.id !== productId);
      }
      return prev.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity + delta } : i,
      );
    });
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const openProductPage = (product) => {
    setScrollPosition(window.scrollY);
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    setCurrentPage('article');
    window.scrollTo(0, 0);
  };

  const goBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 50);
  };

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const scrollToProducts = () => {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25 },
  };

  return (
    <div className='app'>
      <Navbar
        cartCount={getCartCount()}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onPageChange={(page) => {
          setSelectedProduct(null);
          setSelectedArticle(null);
          setCurrentPage(page);
        }}
        isLoggedIn={isLoggedIn}
        onLogout={() => setIsLoggedIn(false)}
      />

      <main>
        <AnimatePresence mode='wait'>
          {currentPage === 'home' && (
            <motion.div key='home' {...pageTransition}>
              <HeroVideo />

              <motion.div
                className='collection-banner'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <div className='collection-banner-content'>
                  <span className='collection-label'>LIMITED DROP</span>
                  <h2>DROP 001</h2>
                  <p>
                    Эксклюзивная коллекция.
                    <br />
                    Всего 100 экземпляров каждой модели.
                  </p>
                  <button
                    className='btn-outline-light'
                    onClick={scrollToProducts}>
                    SHOP NOW
                  </button>
                </div>
              </motion.div>

              <div className='products-section'>
                <div className='products-header'>
                  <h3 className='products-title'>НОВАЯ КОЛЛЕКЦИЯ</h3>
                  <div className='category-filters'>
                    <button
                      className={`filter-chip ${activeCategory === 'all' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('all')}>
                      ВСЕ
                    </button>
                    <button
                      className={`filter-chip ${activeCategory === 'tshirt' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('tshirt')}>
                      ERD
                    </button>
                    <button
                      className={`filter-chip ${activeCategory === 'sneakers' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('sneakers')}>
                      NIKE
                    </button>
                  </div>
                </div>

                <div className='products-grid'>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => openProductPage(product)}>
                      <ProductCard
                        product={product}
                        onAddToCart={addToCart}
                        onToggleFavorite={toggleFavorite}
                        isFavorite={favorites.includes(product.id)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'favorites' && (
            <motion.div
              key='favorites'
              {...pageTransition}
              className='favorites-page'>
              <div className='favorites-header'>
                <h1>ИЗБРАННОЕ</h1>
                <p>{favorites.length} ТОВАРОВ</p>
              </div>

              {favorites.length === 0 ? (
                <div className='empty-favorites'>
                  <div className='empty-icon'>✦</div>
                  <h2>СПИСОК ПУСТ</h2>
                  <p>Сохраняйте понравившиеся товары</p>
                  <button
                    className='btn-primary'
                    onClick={() => setCurrentPage('home')}>
                    В КАТАЛОГ
                  </button>
                </div>
              ) : (
                <div className='products-grid'>
                  {products
                    .filter((p) => favorites.includes(p.id))
                    .map((product) => (
                      <div
                        key={product.id}
                        onClick={() => openProductPage(product)}>
                        <ProductCard
                          product={product}
                          onAddToCart={addToCart}
                          onToggleFavorite={toggleFavorite}
                          isFavorite={true}
                        />
                      </div>
                    ))}
                </div>
              )}
            </motion.div>
          )}

          {currentPage === 'product' && selectedProduct && (
            <motion.div key='product' {...pageTransition}>
              <ProductPage
                product={selectedProduct}
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(selectedProduct.id)}
                onBack={goBackToHome}
              />
            </motion.div>
          )}

          {currentPage === 'journal' && (
            <motion.div key='journal' {...pageTransition}>
              <Journal onOpenArticle={openArticle} />
            </motion.div>
          )}

          {currentPage === 'article' && selectedArticle && (
            <motion.div key='article' {...pageTransition}>
              <ArticlePage
                article={selectedArticle}
                onBack={() => setCurrentPage('journal')}
              />
            </motion.div>
          )}

          {currentPage === 'stores' && (
            <motion.div key='stores' {...pageTransition}>
              <Stores />
            </motion.div>
          )}

          {currentPage === 'checkout' && (
            <motion.div key='checkout' {...pageTransition}>
              <Checkout cartItems={cartItems} total={getCartTotal()} />
            </motion.div>
          )}

          {currentPage === 'login' && (
            <motion.div key='login' {...pageTransition}>
              <Login
                onLogin={() => setIsLoggedIn(true)}
                onRegister={() => setCurrentPage('register')}
              />
            </motion.div>
          )}

          {currentPage === 'register' && (
            <motion.div key='register' {...pageTransition}>
              <Register onRegister={() => setCurrentPage('login')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={getCartTotal()}
        onCheckout={() => {
          setIsCartOpen(false);
          setCurrentPage('checkout');
        }}
      />

      <Footer />
    </div>
  );
}

export default App;
