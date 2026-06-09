import React, { useState } from 'react';
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
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');

  const applyPromo = () => {
    if (promoCode === 'WELCOME10') {
      setDiscount(total * 0.1);
      setMessage('10% discount applied!');
    } else if (promoCode === 'VOGUE20') {
      setDiscount(total * 0.2);
      setMessage('20% discount applied!');
    } else {
      setDiscount(0);
      setMessage('Invalid promo code');
    }
  };

  const finalTotal = total - discount;

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

  if (!isOpen) return null;

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
            onClick={onClose}
          />

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
                <div className='cart-promo'>
                  <input
                    type='text'
                    placeholder='PROMO CODE'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button onClick={applyPromo}>APPLY</button>
                  {message && <p className='promo-message'>{message}</p>}
                </div>

                <div className='cart-total'>
                  <span>SUBTOTAL</span>
                  <span>₽{total.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className='cart-discount'>
                    <span>DISCOUNT</span>
                    <span>-₽{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className='cart-final'>
                  <span>TOTAL</span>
                  <span>₽{finalTotal.toLocaleString()}</span>
                </div>

                <button className='checkout-btn' onClick={onCheckout}>
                  CHECKOUT
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
