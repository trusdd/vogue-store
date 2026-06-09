import React from 'react';
import './Footer.css';

function Footer({ onPageChange, isDarkMode }) {
  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>VOGUE STUDIO</h3>
          <p>Where minimalism meets perfection</p>
        </div>

        <div className='footer-section'>
          <h4>SHOP</h4>
          <ul>
            <li onClick={() => onPageChange('home')}>All Products</li>
            <li>ERD Collection</li>
            <li>Nike Collaborations</li>
            <li>Archive</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>INFO</h4>
          <ul>
            <li onClick={() => onPageChange('about')}>About Us</li>
            <li onClick={() => onPageChange('shipping')}>Shipping & Returns</li>
            <li onClick={() => onPageChange('faq')}>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>CONTACT</h4>
          <ul>
            <li>hello@voguestudio.com</li>
            <li>+7 (495) 000-00-00</li>
            <li>Mon - Fri: 10am - 8pm</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>FOLLOW</h4>
          <div className='footer-social'>
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>FACEBOOK</span>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2026 VOGUE STUDIO. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
