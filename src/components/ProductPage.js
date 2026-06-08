import React from 'react';
import { motion } from 'framer-motion';
import './ProductPage.css';

function ProductPage({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  onBack,
}) {
  const [selectedSize, setSelectedSize] = React.useState(null);

  const handleAdd = () => {
    onAddToCart(product);
  };

  return (
    <div className='product-page'>
      <div className='product-page-container'>
        <button className='back-button' onClick={onBack}>
          ← BACK
        </button>

        <div className='product-page-grid'>
          <div className='product-page-image'>
            <img src={product.image} alt={product.name} />
          </div>

          <div className='product-page-info'>
            <div className='product-page-brand'>{product.brand}</div>
            <h1>{product.name}</h1>
            <div className='product-page-price'>
              ₽{product.price.toLocaleString()}
            </div>

            <div className='product-page-description'>
              <p>{product.description}</p>
            </div>

            <div className='product-page-sizes'>
              <h4>SIZE</h4>
              <div className='size-grid'>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className='product-page-actions'>
              <button className='add-to-cart-page' onClick={handleAdd}>
                ADD TO CART
              </button>
              <button
                className={`favorite-page ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(product.id)}>
                {isFavorite ? '✦' : '☆'}
              </button>
            </div>

            <div className='product-page-meta'>
              <p>FREE SHIPPING ON ORDERS OVER ₽50,000</p>
              <p>14 DAYS RETURN POLICY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
