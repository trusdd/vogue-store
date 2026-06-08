import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>VOGUE STUDIO</h3>
          <p>Where minimalism meets perfection</p>
        </div>

        <div className='footer-section'>
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>LEGAL</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>FOLLOW US</h4>
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
