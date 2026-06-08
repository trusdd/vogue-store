import React, { useState } from 'react';
import './Checkout.css';

function Checkout({ cartItems, total, onBack }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ЗАКАЗ ОФОРМЛЕН! Спасибо за покупку');
    window.location.href = '/';
  };

  if (cartItems.length === 0) {
    return (
      <div className='checkout-empty'>
        <h2>КОРЗИНА ПУСТА</h2>
        <button
          className='btn-primary'
          onClick={() => (window.location.href = '/')}>
          ВЕРНУТЬСЯ В КАТАЛОГ
        </button>
      </div>
    );
  }

  return (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>

        <div className='checkout-grid'>
          <div className='checkout-form'>
            <form onSubmit={handleSubmit}>
              <div className='form-section'>
                <h3>ЛИЧНАЯ ИНФОРМАЦИЯ</h3>
                <div className='form-row'>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='ИМЯ'
                    required
                    onChange={handleChange}
                  />
                  <input
                    type='text'
                    name='lastName'
                    placeholder='ФАМИЛИЯ'
                    required
                    onChange={handleChange}
                  />
                </div>
                <input
                  type='email'
                  name='email'
                  placeholder='EMAIL'
                  required
                  onChange={handleChange}
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='ТЕЛЕФОН'
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='form-section'>
                <h3>ДОСТАВКА</h3>
                <input
                  type='text'
                  name='address'
                  placeholder='АДРЕС'
                  required
                  onChange={handleChange}
                />
                <div className='form-row'>
                  <input
                    type='text'
                    name='city'
                    placeholder='ГОРОД'
                    required
                    onChange={handleChange}
                  />
                  <input
                    type='text'
                    name='postalCode'
                    placeholder='ИНДЕКС'
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='form-section'>
                <h3>ОПЛАТА</h3>
                <input
                  type='text'
                  name='cardNumber'
                  placeholder='НОМЕР КАРТЫ'
                  required
                  onChange={handleChange}
                />
                <div className='form-row'>
                  <input
                    type='text'
                    name='cardExpiry'
                    placeholder='MM/YY'
                    required
                    onChange={handleChange}
                  />
                  <input
                    type='text'
                    name='cardCvv'
                    placeholder='CVV'
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type='submit' className='checkout-submit'>
                ОФОРМИТЬ ЗАКАЗ
              </button>
            </form>
          </div>

          <div className='checkout-summary'>
            <h3>ВАШ ЗАКАЗ</h3>
            {cartItems.map((item) => (
              <div key={item.id} className='checkout-item'>
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>₽{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className='checkout-total'>
              <span>ИТОГО</span>
              <span>₽{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
