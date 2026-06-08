import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Cart.css';

function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  total,
  onCheckout,
}) {
  if (!isOpen) return null;

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className='cart-overlay'
            variants={overlayVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={onClose}></motion.div>

          <motion.div
            className='cart-sidebar'
            variants={sidebarVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>
            <div className='cart-header'>
              <h3>КОРЗИНА</h3>
              <button className='close-cart' onClick={onClose}>
                ✕
              </button>
            </div>

            <div className='cart-items'>
              {items.length === 0 && (
                <div className='empty-state'>КОРЗИНА ПУСТА</div>
              )}

              {items.map((item) => (
                <div key={item.id} className='cart-item'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='cart-item-image'
                  />
                  <div className='cart-item-details'>
                    <div className='cart-item-title'>{item.name}</div>
                    <div className='cart-item-price'>
                      ₽{item.price.toLocaleString()}
                    </div>
                  </div>
                  <div className='cart-item-quantity'>
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className='remove-btn'
                    onClick={() => onRemove(item.id)}>
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className='cart-footer'>
                <div className='cart-total'>
                  <span>ИТОГО</span>
                  <span>₽{total.toLocaleString()}</span>
                </div>
                <button
                  className='checkout-btn'
                  onClick={() => {
                    if (onCheckout) {
                      onCheckout();
                    }
                  }}>
                  ОФОРМИТЬ
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Cart;
