import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar({
  cartCount,
  onCartClick,
  currentPage,
  onPageChange,
  isLoggedIn,
  onLogout,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    if (onLogout) onLogout();
    onPageChange('home');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className={`navbar-premium ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}>
      <div className='navbar-container'>
        <motion.div
          className='navbar-logo'
          onClick={() => {
            onPageChange('home');
            closeMenu();
          }}
          whileHover={{ scale: 1.02 }}>
          VOGUE
        </motion.div>

        <nav className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <a
            href='#'
            className={`nav-link-premium ${currentPage === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('home');
              closeMenu();
            }}>
            HOME
          </a>
          <a
            href='#'
            className={`nav-link-premium ${currentPage === 'journal' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('journal');
              closeMenu();
            }}>
            JOURNAL
          </a>
          <a
            href='#'
            className={`nav-link-premium ${currentPage === 'stores' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('stores');
              closeMenu();
            }}>
            STORES
          </a>
          <a
            href='#'
            className={`nav-link-premium ${currentPage === 'favorites' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('favorites');
              closeMenu();
            }}>
            WISHLIST
          </a>
          <a
            href='#'
            className={`nav-link-premium ${currentPage === 'login' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (isLoggedIn) {
                handleLogout();
              } else {
                onPageChange('login');
              }
              closeMenu();
            }}>
            {isLoggedIn ? 'LOGOUT' : 'LOGIN'}
          </a>
        </nav>

        <div className='navbar-actions'>
          <motion.button
            className='cart-btn-premium'
            onClick={onCartClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <img
              src='/vogue-store/img/shop.png'
              alt='cart'
              className='cart-icon-img'
            />
            {cartCount > 0 && (
              <motion.span
                className='cart-count'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}>
                {cartCount}
              </motion.span>
            )}
          </motion.button>

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
