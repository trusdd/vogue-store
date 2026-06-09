import React from 'react';
import { motion } from 'framer-motion';
import './Shipping.css';

function Shipping() {
  return (
    <motion.div
      className='shipping-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <div className='shipping-container'>
        <h1>SHIPPING & RETURNS</h1>

        <div className='shipping-section'>
          <h2>DELIVERY</h2>
          <p>
            <strong>Standard Delivery:</strong> 3-5 business days — FREE on
            orders over ₽50,000
          </p>
          <p>
            <strong>Express Delivery:</strong> 1-2 business days — ₽1,500
          </p>
          <p>
            <strong>Click & Collect:</strong> Pick up in store — FREE
          </p>
        </div>

        <div className='shipping-section'>
          <h2>RETURNS</h2>
          <p>
            We accept returns within 14 days of delivery. Items must be unworn,
            unwashed, and with original tags attached.
          </p>
          <p>
            To initiate a return, please contact our customer service at
            returns@voguestudio.com
          </p>
        </div>

        <div className='shipping-section'>
          <h2>REFUNDS</h2>
          <p>
            Refunds are processed within 5-7 business days after we receive your
            return. The refund will be issued to your original payment method.
          </p>
        </div>

        <div className='shipping-section'>
          <h2>EXCHANGES</h2>
          <p>
            If you need a different size, please return the original item and
            place a new order.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Shipping;
